import React from "react";
import "../../App.css";
import Monuments from "../Monuments.json"
import Wrapper from "../Wrapper";
import Header from "../Header";
import Container from "../Container";
import SculptureCard from "../SculptureCard";

// Sets the State //

class Abstract extends React.Component {
  state = {
    Monuments,
    chosenMonuments: [],
    score: 0,
    highScore: 0,
    correctIncorrectClicks: "",
};

// Function that executes shuffling the images at random //

shuffleImages = (array) => {
  for (let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Increases score //

scoreIncrease = () => {
  const newScore = this.state.score + 1;
  this.setState({
    score: newScore,
    correctIncorrectClicks: ""
  });
  if (newScore >= this.state.highScore) {
    this.setState({ highScore: newScore });
  }
  else if (newScore === 12) {
    this.setState({ correctIncorrectClicks: "You won!"});
  }
  this.shuffle();
};

// Function that executes the onClick event for each image chosen //

imagesClicked = id => {
  this.state.Monuments.find((ar, i) => {
    if (ar.id === id) {
      if (Monuments[i].count === 0) {
        Monuments[i].count = Monuments[i].count + 1;
        this.setState(
          {
            score: this.state.score + 1
          },
          function() {
            console.log(this.state.score);
          });
        this.state.Monuments.sort(() => Math.random() - 0.5);
        return true;
      } else {
        this.imageReset();
      }
    }
  });
};

// Resets the page with scores and images //

imageReset = () => {
  if (this.state.score > this.state.highScore) {
    this.setState({highScore: this.state.score}, function() {
      console.log(this.state.highscore);
    });
  }
  this.state.Monuments.forEach(Monument => {
    Monument.count = 0;
  });
  this.setState({score: 0});
  return true;
}

render() {
  return (
    <Wrapper>
      <Header
      title="Abstract React"
      score={this.state.score}
      highScore={this.state.highScore} /> 
      
    <div className="subtitle">
      Click an image for one point. Do not choose the same image twice. Otherwise, game over!
    </div>

     <Container>
        {this.state.Monuments.map(monument => (
          <SculptureCard
            key={monument.id}
            imagesClicked={this.imagesClicked}
            scoreIncrease={monument.scoreIncrease}
            imageReset={monument.imageReset}
            shuffle={monument.shuffle}
            id={monument.id}
            image={monument.image} 
            />
        ))} 
      </Container>
    </Wrapper>
  );
}
}

export default Abstract;