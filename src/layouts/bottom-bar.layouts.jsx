import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BottomBarLayout = () => {
  const { pathname } = useLocation();

  return (
    <footer>
      <div className="bottomBar">
        <ul className="bottomBar__list">
          <li className="bottomBar__item">
            <Link
              to="/"
              href="#"
              className={`bottomBar__link ${
                pathname === "/" ? "bottomBar__link--active" : ""
              }`}
            >
              <i className="fa-solid fa-house"></i>
            </Link>
          </li>
          <li className="bottomBar__item">
            <a href="#" className="bottomBar__link">
              <i className="fa-solid fa-key"></i>
            </a>
          </li>
          <li className="bottomBar__item">
            <a href="#" className="bottomBar__link">
              <i className="fa-solid fa-chart-column"></i>
            </a>
          </li>
          <li className="bottomBar__item">
            <a href="#" className="bottomBar__link">
              <i className="fa-solid fa-user"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default BottomBarLayout;
