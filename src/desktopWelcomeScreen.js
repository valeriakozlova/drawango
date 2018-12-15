import React, { Component } from "react";

class Welcome extends Component {
  render() {

    return (
    <div>
      <h1>Welcome to Draw Daddy</h1>
      <p>Go to this site on your mobile to play: www.whatever-we-want-this-to-be.com</p>
      <p>Who's all playing: John, Frank, Sam, Rowle</p>

      <button>Let's begin!</button>
      <button onClick={this.props.changeGameStage}> Everyone's in! </button>
    </div>
    )
  }
}

export default Welcome;