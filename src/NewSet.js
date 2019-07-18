import React, { Component } from "react";
import { withRouter } from "react-router-dom";

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
    return (
      <div>
        <input placeholder="Exercise" value={this.state.Exercise} />
        <input placeholder="Weight" value={this.state.Weight} />
        <input placeholder="Reps" value={this.state.Reps} />
        <button type="submit" onClick={this.navigateToSocial} />
      </div>
    );
  }
}
export default withRouter(NewSet);
