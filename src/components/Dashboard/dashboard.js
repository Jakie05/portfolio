import React, { Component } from "react";
import "./dashboard.css";
import PortfolioImage from "../../assets/images/portfolio-image.png";

class Showcase extends Component {
  render() {
    return (
      <div className="showcase-container">
        <div className="showcase-text-container">
          <p id="user-name">
            <span>Hi,</span> I am {this.props.propsName}
          </p>
          <p id="user-desc">A {this.props.propsDesc}</p>
          <p id="user-tagline">{this.props.propsTagline}</p>
        </div>
        <div className="showcase-image-container">
          <img id="showcase-image" src={PortfolioImage} alt="showcase" />
        </div>
        <div className='flexBtn'>
                   <button className='btn btn1' id='btn1'>
                   <a href='#Contact' className='btn11'>Hire Me</a>
                   </button>
                   <button className='btn btn2' id='btn2'>
                   <a href='#' className='btn11'>Get Resume</a>
                   </button>
            </div>
      </div>
    );
  }
}

export default Showcase;
