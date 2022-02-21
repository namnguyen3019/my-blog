import { ActionType } from "../action-types";

interface UserLogIn {
  type: ActionType.USER_LOGIN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

interface UserLogOut {
  type: ActionType.USER_LOGOUT;
  payload: {};
}
export type Action = UserLogIn | UserLogOut;
