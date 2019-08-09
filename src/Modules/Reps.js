import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "../App.css";

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

  render() {
    if (this.props.reps && JSON.stringify(this.props.reps) !== "{}") {
      return this.props.reps.map(rep => (
        <div
          className="newSetContainer"
          >
          <input
            className= "newSetInput"
            placeholder="poop"
            value={rep.numberOfReps} />
          <input
            className= "newSetInput"
            placeholder="Weight"
            value={rep.Weight} />
          <input className= "newSetInput" placeholder="Reps" value={rep.Date} />
          <button
            className="newSetSubmitButton"
            type="submit"
            onClick={this.navigateToSocial}>
            Submit!
          </button>
        </div>

      ));
    }
  }
}

export default withRouter(NewSet);
