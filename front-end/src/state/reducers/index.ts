import { combineReducers } from "redux";
import { postReducers } from "./postReducers";
import { userReducers } from "./userReducers";
const rootReducers = combineReducers({
  /*
    state: reducer
  */
  user: userReducers,
  posts: postReducers,
});

export default rootReducers;
export type RootState = ReturnType<typeof rootReducers>;
