import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main.layouts";
import QuizPage from "./pages/quiz.page";
import QuizesPage from "./pages/quizes.page";
import HomePage from "./pages/home.page";
import ResultsPage from "./pages/results.page";
import TopbarLayout from "./layouts/topbar.layouts";
import BottomBarLayout from "./layouts/bottom-bar.layouts";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopbarLayout />
        <Routes>
          <Route exact path="/" element={<MainLayout />}>
            <Route exact path="" element={<HomePage />} />
            <Route exact path="quiz/:number" element={<QuizPage />} />
            <Route exact path="quizes" element={<QuizesPage />} />
            <Route exact path="results" element={<ResultsPage />} />
          </Route>
        </Routes>
        <BottomBarLayout />
      </React.Fragment>
    );
  }
}

export default App;
