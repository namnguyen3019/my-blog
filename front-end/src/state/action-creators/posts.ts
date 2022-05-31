import { ActionType } from "../action-types";

export const get_all_posts = (posts: []) => {
  return {
    type: ActionType.GET_ALL_POSTS,
    payload: posts,
  };
};
