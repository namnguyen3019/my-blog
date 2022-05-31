import axios from "axios";
import { ActionType } from "../action-types";

export const get_all_posts = () => {
  return async function (dispatch: any, getState: any) {
    const userInfo = getState().user;
    console.log(userInfo);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authenicaiton: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("http://localhost:5001/api/posts", config);
    try {
      dispatch({
        type: ActionType.GET_ALL_POSTS,
        payload: data,
      });

      localStorage.setItem("posts", JSON.stringify(data));
    } catch (error) {}
  };
};

interface GetAllPostSuccess {
  type: ActionType.GET_ALL_POSTS;
  payload: any;
}
export type Action = GetAllPostSuccess;
