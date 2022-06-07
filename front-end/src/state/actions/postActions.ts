import axios from "axios";
import { ActionType } from "../action-types";

// Fetch all posts
export const get_all_posts = () => {
  return async function (dispatch: any, getState: any) {
    const { token } = getState().user;
    const config = {
      headers: {
        "Content-type": "application/json",
        Authentication: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get("http://localhost:5001/api/posts", config);
    try {
      dispatch({
        type: ActionType.GET_ALL_POSTS,
        payload: data,
      });
      localStorage.setItem("posts", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
};

// Fetch a post
export const get_a_post = (postId: string) => {
  return async function (dispatch: any, getState: any) {
    const token = getState().user.token;
    const config = {
      headers: {
        "Content-type": "application/json",
        Authentication: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5001/api/posts/${postId}`,
      config
    );
    console.log(data);
    try {
      dispatch({
        type: ActionType.GET_A_POST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// Add a post add_a_post
export const add_new_post = (title: string, body: string) => {
  return async function (dispatch: any, getState: any) {
    const { token } = getState().user;
    const config = {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.post(
      `http://localhost:5001/api/posts/`,
      {
        title: title,
        body: body,
      },
      config
    );
    console.log(data);

    try {
      dispatch({
        type: ActionType.CREATE_POST,
        payload: data,
      });

      const updatedPostList = [
        ...JSON.parse(localStorage.getItem("posts")!),
        data,
      ];
      localStorage.setItem("posts", JSON.stringify(updatedPostList));
    } catch (error) {
      console.log(error);
    }
  };
};

// Update a post
export const update_a_post = (postId: any, newpost: any) => {
  return async function (dispatch: any, getState: any) {
    const token = getState().user.token;

    const config = {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.put(
      `http://localhost:5001/api/posts/update/${postId}`,
      {
        title: newpost.postTitle,
        body: newpost.postBody,
      },
      config
    );

    console.log(data);

    dispatch({
      type: ActionType.UPDATE_POST,
      payload: data,
    });

    // Update local storage
    // Better to store posts as dictionary
    const local_posts = JSON.parse(localStorage.getItem("posts")!);
    for (let i = 0; i < local_posts!.length; i++) {
      if (local_posts[i]._id === postId) {
        local_posts[i].title = newpost.postTitle;
        local_posts[i].body = newpost.postBody;
        break;
      }
    }

    localStorage.setItem("posts", JSON.stringify(local_posts));
  };
};
// Delete a post
export const delete_a_post = (postId: string) => {
  return async function (dispatch: any, getState: any) {
    const { token } = getState().user;
    const config = {
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.delete(
      `http://localhost:5001/api/posts/${postId}`,
      config
    );
    console.log(data);
    try {
      dispatch({
        type: ActionType.DELETE_POST,
        payload: data._id,
      });

      const updated_posts = JSON.parse(localStorage.getItem("posts")!).filter(
        (x: { _id: string }) => x._id !== postId
      );
      localStorage.setItem("posts", JSON.stringify(updated_posts));
    } catch (error) {
      console.log(error);
    }
  };
};
interface GetAllPostSuccess {
  type: ActionType.GET_ALL_POSTS;
  payload: any;
}

interface GetPost {
  type: ActionType.GET_A_POST;
  payload: any;
}
interface GetPostRequest {
  type: ActionType.GET_A_POST_REQUEST;
  payload: any;
}

interface GetPostSuccess {
  type: ActionType.GET_A_POST_SUCCESS;
  payload: any;
}
interface GetPostFail {
  type: ActionType.GET_A_POST_FAIL;
  payload: any;
}

interface UserLogOut {
  type: ActionType.USER_LOGOUT;
  payload: {};
}

interface CreateAPost {
  type: ActionType.CREATE_POST;
  payload: any;
}
interface UpdatePost {
  type: ActionType.UPDATE_POST;
  payload: any;
}
interface DeleteAPost {
  type: ActionType.DELETE_POST;
  payload: any;
}
export type Action =
  | GetAllPostSuccess
  | GetPost
  | GetPostSuccess
  | GetPostRequest
  | GetPostFail
  | DeleteAPost
  | CreateAPost
  | UpdatePost
  | UserLogOut;
