import { combineReducers } from "redux";
import { postDetailReducer, postReducers } from "./postReducers";
import { userReducers } from "./userReducers";
const rootReducers = combineReducers({
  /*
    state: reducer
  */
  user: userReducers,
  posts: postReducers,
  postDetail: postDetailReducer,
  postDelete: postDetailReducer,
});

export default rootReducers;
export type RootState = ReturnType<typeof rootReducers>;
