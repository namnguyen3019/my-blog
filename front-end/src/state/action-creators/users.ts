import { ActionType } from "../action-types";

export type UserInfo = {
  email: string;
  password: string;
};

export const userLogin = (userInfo: any) => {
  return {
    type: ActionType.USER_LOGIN_REQUEST,
    payload: userInfo,
  };
};

export const userLogOut = () => {
  return {
    type: ActionType.USER_LOGOUT,
    payload: null,
  };
};
