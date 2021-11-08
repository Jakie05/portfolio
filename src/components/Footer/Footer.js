import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <p className="footer-text">
          &copy; 2021 {this.props.propsName} Jakie Singh. All rights reserved.
        </p>
      </div>
    );
  }
}

export default Footer;