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

// Function that executes the onClick event for each image chosen //

// Heroes = (props) => {
//   return (
//     <div className="card">
//       <div className="img-container">
//         <img
//           onClick={() => props.handleClick(props.id)}
//           alt={props.name}
//           src={props.image}
//         />
//       </div>
//       <div className="content">
//         <strong>{props.name}</strong>
//       </div>
//     </div>
//   );
// }

// handleClick = id => {
//   this.state.Data.find((hero, i) => {
//     if (hero.id === id) {
//       if (Data[i].count === 0) {
//         Data[i].count += 1;
//         this.setState(
//           {
//             score: this.state.score + 1
//           },
//           function() {
//             console.log(this.state.score);
//           }
//         );
//         this.state.Data.sort(() => Math.random() - 0.5);
//         return true;
//       } else {
//         this.gameOver();
//       }
//     }
//   });
// };

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
    this.setState({ correctIncorrectClicks: "Celebrate! You have won!"});
  }
  this.shuffle();
};

// Decreases score //

imagesClicked = (id) => {
  if (this.state.chosenMonuments.indexOf(id) === -1) {
    this.scoreIncrease();
    this.setState({ chosenMonuments: this.state.chosenMonuments.concat(id) });
  } else {
    this.scoreReset();
  }
};

// Resets the page with scores and images //

imageReset = () => {
  this.setState({
    score: 0,
    highScore: this.state.highScore,
    correctIncorrectClicks: "Sorry, you have lost!",
    chosenMonuments: [],
  });
  this.shuffle();
};

shuffle = () => {
  this.setState({ SculptureCard: this.shuffleImages(SculptureCard) });
};

render() {
  return (
    <Wrapper>
      <Header
      title="Abstract React"
      score={this.state.score}
      highScore={this.state.highScore} /> 
      
    <div className="subtitle">
      Click  an  image  for  one  point.  Do  not  choose  the  same  image  twice,  otherwise,  game over!
    </div>

     <Container>
        {this.state.Monuments.map(monument => (
          <SculptureCard
            key={monument.id}
            imagesClicked={monument.imagesClicked}
            scoreIncrease={monument.scoreIncrease}
            imageReset={monument.imageReset}
            shuffle={monument.shuffle}
            id={monument.id}
            // name={monument.name}
            image={monument.image} 
            />
        ))} 
      </Container>
    </Wrapper>
  );
}
}

export default Abstract;