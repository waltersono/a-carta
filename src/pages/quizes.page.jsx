import React from "react";
import { Link } from "react-router-dom";

const QuizesPage = () => {
  return (
    <div className="home">
      <p className="home__title">Escolha um teste</p>
      <div className="home__menu">
        <ul className="home__menu-list">
          <li className="home__menu-item">
            <Link
              to="/quiz/1"
              className="home__menu-link home__menu-link--opened"
            >
              <i className="fa-solid fa-copy"></i>
              <span>Teste 1</span>
            </Link>
          </li>
          <li className="home__menu-item">
            <Link to="/quiz/2" className="home__menu-link">
              <i className="fa-solid fa-lock"></i>
              <span>Teste 2</span>
            </Link>
          </li>
          <li className="home__menu-item">
            <Link to="/quiz/3" className="home__menu-link">
              <i className="fa-solid fa-lock"></i>
              <span>Teste 3</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuizesPage;
