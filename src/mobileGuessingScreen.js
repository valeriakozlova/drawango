import React, {Component} from 'react';

class MobileGuessingScreen extends Component {

  handleSubmit = event => {
    event.preventDefault();
    const guessInput = event.target.elements.guess;
    this.props.addGuess(guessInput.value);
    this.props.changeGameStage("votingStage");
    }

  render() {
    return (
      <div>
        <p>Make your guess!</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            What's the drawing?:
            <input type="text" name="guess" />
          </label>
          <input type="submit" value="Guess" />
        </form>
      </div>
    );
  }
}
export default MobileGuessingScreen;