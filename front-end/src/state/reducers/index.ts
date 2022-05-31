import { combineReducers } from "redux";
import { dummy } from "./dummyReducers";
import { userReducers } from "./userReducers";
const rootReducers = combineReducers({
  /*
    state: reducer
  */
  user: userReducers,
  posts: dummy,
});

export default rootReducers;
export type RootState = ReturnType<typeof rootReducers>;
