import React, { useState, useEffect, useLayoutEffect } from "react";
import useCountdown from "../hooks/useCountdown.hook";
import { Link } from "react-router-dom";
import { getQuiz } from "../services/data.services";
import { useParams } from "react-router-dom";
import LoadingIcon from "../components/loading-icon.component";
import { useDispatch } from "react-redux";
import { setCurrentQuiz } from "../redux/actions/quiz.actions";

const QuizPage = () => {
  const [quiz, setQuiz] = useState([]);

  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    const selectedQuiz = getQuiz(params.number);

    dispatch(setCurrentQuiz(selectedQuiz));

    setQuiz(selectedQuiz);
  }, []);

  const [questionNumber, setQuestionNumber] = useState(0);

  const currentQuestion = quiz[questionNumber];

  const [minute, second] = useCountdown(20);

  const handleChangeQuestion = (direction) => {
    if (direction === "next") {
      setQuestionNumber((currentValue) => currentValue + 1);
    }

    if (direction === "previous") {
      setQuestionNumber((currentValue) => currentValue - 1);
    }
  };

  const handleMarkSelected = (optionIndex) => {
    const updatedQuiz = Array.from(quiz);

    const updatedQuestion = updatedQuiz[questionNumber];

    updatedQuestion.options.forEach((option) => (option.selected = false));

    updatedQuestion.options[optionIndex].selected = true;

    updatedQuiz.splice(questionNumber, 1, updatedQuestion);

    setQuiz(updatedQuiz);
    dispatch(setCurrentQuiz(updatedQuiz));
  };

  useLayoutEffect(() => {
    document.title = "TESTE 1";
  });
  return (
    <div className="quiz">
      {quiz.length === 0 ? (
        <LoadingIcon />
      ) : (
        <div className="question">
          <div className="question__status">
            <p className="question__progress">
              Pergunta {questionNumber + 1}/{quiz.length}
            </p>
            <div className="question__time">
              <span>
                {minute} : {second}
              </span>
            </div>
            <Link to="/results" className="question__close">
              Terminar
            </Link>
          </div>
          <h2 className="question__title">{currentQuestion.title}</h2>

          <div className="question__image-box">
            <img
              src={require(`../../public/assets/quiz1/${currentQuestion.image}`)}
              alt="Signal 50"
              className="question__image"
            />
          </div>

          <ul className="question__answers">
            {currentQuestion.options.map((option, i) => {
              return (
                <li
                  key={i}
                  className={`question__answers-item ${
                    option.selected ? "question__answers-item--active" : ""
                  }`}
                  onClick={() => handleMarkSelected(i)}
                >
                  <span className="question__answers-text">{option.text}</span>
                </li>
              );
            })}
          </ul>

          {questionNumber === 0 ? (
            <div className="question__button-group">
              <button
                type="button"
                className="btn btn--primary question__button"
                onClick={() => handleChangeQuestion("next")}
              >
                Proximo
              </button>
            </div>
          ) : null}
          {questionNumber > 0 && questionNumber < quiz.length - 1 ? (
            <div className="question__button-group">
              <button
                type="button"
                className="btn btn--primary question__button"
                onClick={() => handleChangeQuestion("previous")}
              >
                Anterior
              </button>
              <button
                type="button"
                className="btn btn--primary question__button"
                onClick={() => handleChangeQuestion("next")}
              >
                Proximo
              </button>
            </div>
          ) : null}
          {questionNumber === quiz.length - 1 ? (
            <div className="question__button-group">
              <button
                type="button"
                className="btn btn--primary question__button"
                onClick={() => handleChangeQuestion("previous")}
              >
                Anterior
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default QuizPage;
