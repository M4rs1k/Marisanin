import React from "react";
import { Link } from "react-router-dom";
import "./banner.css";
import Navbar from "./Navbar";
class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <Navbar />
        <div className="banner__content">
          <h2>Найди жильё рядом</h2>
          <h5>
            Находите жильё по доступным ценам в любой точке страны. Выставляйте свои объявления и зарабатывайте уже сейчас
          </h5>
          <Link to="/result">
            <button>Начать поиск</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Banner;
