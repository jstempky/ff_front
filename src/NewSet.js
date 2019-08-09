import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import './App.css';

class NewSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Exercise: null,
      Weight: null,
      Reps: null
    };
  }

  submit = () => {
    this.props.history.push("/");
  };

  navigateToSocial = () => {
    this.props.history.push("/dashboard")
  }

  render() {
    return (
      <div
        className="newSetInput"
      >
        <input placeholder="Exercise" value={this.state.Exercise} />
        <input placeholder="Weight" value={this.state.Weight} />
        <input placeholder="Reps" value={this.state.Reps} />
        <button type="submit" color="yellow" className="newSetSubmitButton" onClick={this.navigateToSocial}>
          Submit!
        </button>
      </div>
    );
  }
}
export default withRouter(NewSet);
