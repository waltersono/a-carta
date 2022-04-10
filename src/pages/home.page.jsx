import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">
      <p className="home__title">Escolha uma categoria</p>
      <div className="home__menu">
        <ul className="home__menu-list">
          <li className="home__menu-item">
            <Link to="#" className="home__menu-link">
              <i className="fa-solid fa-note-sticky"></i>
              <span>Exame</span>
            </Link>
          </li>
          <li className="home__menu-item">
            <Link to="quizes" className="home__menu-link">
              <i className="fa-solid fa-copy"></i>
              <span>Testes</span>
            </Link>
          </li>
          <li className="home__menu-item">
            <Link to="#" className="home__menu-link">
              <i className="fa-solid fa-circle-stop"></i>
              <span>Sinas</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
