import { ActionType } from "../action-types/index";
import { Action } from "../actions/postActions";

//  the state has to be initialized !IMPORTANT
//  If not: React not render
const initialized = JSON.parse(localStorage.getItem("posts")!) || null;
export const postReducers = (state: any = initialized, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL_POSTS:
      return state;
    default:
      return state;
  }
};
