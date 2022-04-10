import QuizTypes from "../types/quiz.types";

export const setCurrentQuiz = (selectedQuiz) => {
  return {
    type: QuizTypes.SET_CURRENT_QUIZ,
    payload: selectedQuiz,
  };
};
