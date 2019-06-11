import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import raptors from "./raptors.json";
import "./App.css";

// Sets state to 0 or empty
class App extends Component {
  state = {
    raptors,
    clickedRaptors: [],
    score: 0
  };

// When you click on a card ... the raptor is taken out of the array
  imageClick = event => {
    const currentRaptors = event.target.alt;
    const RaptorsAlreadyClicked =
      this.state.clickedRaptors.indexOf(currentRaptors) > -1;

// If you click on a raptor that has already been selected, the game is reset and cards reordered
    if (RaptorsAlreadyClicked) {
      this.setState({
        raptors: this.state.raptors.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedRaptors: [],
        score: 0
      });
        alert("You lose. Play again?");

// If you click on an available raptor, your score is increased and cards reordered
    } else {
      this.setState(
        {
          raptors: this.state.raptors.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedRaptors: this.state.clickedRaptors.concat(
            currentRaptors
          ),
          score: this.state.score + 1
        },
// If you get all 12 raptors correct you get a message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("You Win!");
            this.setState({
              raptors: this.state.raptors.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedRaptors: [],
              score: 0
            });
          }
        }
      );
    }
  };

// The order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.raptors.map(raptors => (
            <FriendCard
              imageClick={this.imageClick}
              id={raptors.id}
              key={raptors.id}
              image={raptors.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
