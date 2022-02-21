import { ActionType } from "../action-types/index";
import { Action } from "../actions/userActions";

//  the state has to be initialized !IMPORTANT
//  If not: React not render
const initialized = {
  user: {},
};
export const userReducers = (state: any = initialized, action: Action) => {
  switch (action.type) {
    case ActionType.USER_LOGIN_REQUEST:
      return state;
    case ActionType.USER_LOGOUT:
      return state;
    default:
      return state;
  }
};
