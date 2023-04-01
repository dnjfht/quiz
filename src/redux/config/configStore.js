import { combineReducers, createStore } from "redux";
import quiz from "../modules/quiz";
import user from "../modules/user";

const rootReducer = combineReducers({
  user: user,
  quiz: quiz,
});
const store = createStore(rootReducer);
export default store;
