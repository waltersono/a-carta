import { combineReducers } from "redux";

import quizReducer from "./reducers/quiz.reducer";

const rootReducer = combineReducers({
  quiz: quizReducer,
});

export default rootReducer;
