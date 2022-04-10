import QuizTypes from "../types/quiz.types";
const INITIAL_STATE = {
  currentQuiz: null,
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuizTypes.SET_CURRENT_QUIZ: {
      return {
        ...state,
        currentQuiz: action.payload,
      };
    }
    default:
      return state;
  }
};

export default quizReducer;
