import React, { Component } from "react";
import "./MyPortfolio.css";
import ToDoWebImage from "../../assets/images/to-do-web-image.png";
import ToDoMobileImage from "../../assets/images/to-do-mobile-image.png";
import DigitalClock from "../../assets/images/digital-clock-image.png";


class MyPortfolio extends Component {
  render() {
    return (
      <div className="my-portfolio-container" id="portfolio">
        <h2 className="my-portfolio-title">My Portfolio</h2>
        <div className="project-image-container">
          <div>
            <a
              href="https://jakie05.github.io/todo-app-js/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="to-do-web-image"
                className="project-image"
                src={ToDoWebImage}
                alt="To-Do-Web"
              />
            </a>
          </div>

         

          <div>
            <a
              href="https://jakie05.github.io/to-do-mobile/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="to-do-mobile-image"
                className="project-image"
                src={ToDoMobileImage}
                alt="To-Do-Mobile"
              />
            </a>
          </div>

          <div>
            <a
              href=" https://jakie05.github.io/clock-time/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                id="digital-clock"
                className="project-image"
                src={DigitalClock}
                alt="Digital-Clock"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MyPortfolio;
