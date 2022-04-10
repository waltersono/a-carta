export const getCorrectAnswers = (quiz) => {
  let corrects = 0;

  quiz.forEach((question) => {
    question.options.forEach((option) => {
      if (option.isCorrect && option.selected) {
        corrects += 1;
      }
    });
  });

  return corrects;
};
