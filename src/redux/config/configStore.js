import { combineReducers, createStore } from "redux";
import quiz from "../modules/quiz";
import user from "../modules/user";
import rank from "../modules/rank";

const rootReducer = combineReducers({
  user: user,
  quiz: quiz,
  rank: rank,
});
const store = createStore(rootReducer);
export default store;
