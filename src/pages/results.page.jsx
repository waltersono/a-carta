import React, { useEffect, useState, useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import { getCorrectAnswers } from "../utils/get-correct-answers.utils";

const ResultsPage = () => {
  const [correctCounter, setCorrectCounter] = useState(0);

  const [wrongCounter, setWrongCounter] = useState(0);

  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);

  const correctAnswers = useMemo(() => getCorrectAnswers(currentQuiz));

  const [message, setMessage] = useState(null);

  const MESSAGE = {
    PASS: "PASSOU",
    FAIL: "CHUMBOU",
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (correctAnswers !== correctCounter) {
  //       setCorrectCounter((currentValue) => currentValue + 1);
  //     } else {
  //       if (correctCounter > 10) {
  //         setMessage(MESSAGE.PASS);
  //       } else {
  //         setMessage(MESSAGE.FAIL);
  //       }
  //     }
  //   }, 100);

  //   return () => clearInterval(interval);
  // }, [correctCounter]);

  return (
    <div className="results">
      <h1 className="results__correct">20</h1>

      <div className="results__message-box">
        <p className={`results__message results__message--pass`}>PASSOU</p>
        {/* {message && (
          <p
            className={`results__message ${
              message === MESSAGE.PASS
                ? "results__message--pass"
                : "results__message--fail"
            }`}
          >
            {message}
          </p>
        )} */}
      </div>
      <div className="flex">
        <div className="card">
          <p className="card__text">
            <span className="card__text-1">Duracao</span>
            <span className="card__text-2">5:30</span>
          </p>
        </div>
      </div>

      <button className="btn ">REVER PERGUNTAS</button>
      <button className="btn btn--primary">REFAZER TESTE</button>
      <button className="btn btn--primary">ABRIR TESTE 2</button>
    </div>
  );
};

export default ResultsPage;
