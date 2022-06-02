import { Dispatch } from "react";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;

const postsFromStorage = localStorage.getItem("posts")
  ? JSON.parse(localStorage.getItem("posts")!)
  : null;
const initialState: any = {
  user: userInfoFromStorage,
  posts: postsFromStorage,
};
const store = createStore(rootReducers, initialState, composedEnhancer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch | Dispatch<any>;
export default store;
