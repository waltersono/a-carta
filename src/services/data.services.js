import QUIZES_DATA from "../data/quizes.data";
const getData = (endpoint) => {
  const delay = (0.5 + Math.random() * 2) * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(endpoint).then((res) => {
        resolve(res.json());
      });
    }, delay);
  });
};

export const getQuiz = (quizNumber) => {
  return QUIZES_DATA.filter((question) => question.quizNumber == quizNumber);
};
