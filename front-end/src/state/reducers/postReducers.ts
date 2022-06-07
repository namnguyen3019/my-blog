import { ActionType } from "../action-types/index";
import { Action } from "../actions/postActions";

//  the state has to be initialized !IMPORTANT
//  If not: React not render
const initialized: [] = [];
export const postReducers = (state: [] = initialized, action: Action) => {
  switch (action.type) {
    case ActionType.GET_ALL_POSTS:
      return action.payload;
    case ActionType.DELETE_POST:
      return state.filter((x: { _id: any }) => x._id !== action.payload);
    case ActionType.CREATE_POST:
      return [action.payload, ...state];
    case ActionType.UPDATE_POST:
      return [
        action.payload,
        ...state.filter((x: { _id: any }) => x._id !== action.payload._id),
      ];
    case ActionType.USER_LOGOUT:
      return [];
    default:
      return state;
  }
};

export const postDetailReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ActionType.GET_A_POST_REQUEST:
      return action.payload;
    case ActionType.GET_A_POST_SUCCESS:
      return action.payload;
    case ActionType.GET_A_POST_FAIL:
      return action.payload;
    case ActionType.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const postDeleteReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case ActionType.DELETE_POST:
      return action.payload;
    default:
      return state;
  }
};
