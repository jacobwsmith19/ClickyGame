import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft">Clicky Game</li>
          <li className="itemCenter"></li>
          <li className="itemRight">Current score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;