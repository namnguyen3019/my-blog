import axios from "axios";
import { ActionType } from "../action-types";
interface UserLogInRequest {
  type: ActionType.USER_LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}
interface UserLogInSuccess {
  type: ActionType.USER_LOGIN_SUCCESS;
  payload: {
    email: string;
    password: string;
  };
}

interface UserLogOut {
  type: ActionType.USER_LOGOUT;
  payload: {};
}
export type Action = UserLogInRequest | UserLogInSuccess | UserLogOut;

export const login = (email: string, password: string) => {
  return async function (dispatch: any, getState: any) {
    try {
      dispatch({
        type: ActionType.USER_LOGIN_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5001/api/users/login",
        { email, password },
        config
      );
      dispatch({
        type: ActionType.USER_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const signUp = (name = "", email: string, password: string) => {
  return async function (dispatch: any, getState: any) {
    try {
      dispatch({
        type: ActionType.USER_SIGNUP_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5001/api/users/register",
        { name, email, password },
        config
      );
      dispatch({
        type: ActionType.USER_SIGNUP_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.USER_SIGNUP_FAIL,
        payload: error,
      });
    }
  };
};

export const logOut = () => {
  return async function (dispatch: any, getState: any) {
    try {
      localStorage.removeItem("userInfo");
      dispatch({
        type: ActionType.USER_LOGOUT,
        payload: {},
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};
