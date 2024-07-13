import { combineReducers } from "redux";
import authReducer from "./auth-reducers";
import loadingReducer from "./loading-reducer";
import subjectReducer from "./subject-reducers";
import sourceReducer from "./source-reducers";

const rootReducer = combineReducers({
  authUser: authReducer,
  loading: loadingReducer,
  subject: subjectReducer,
  source: sourceReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
