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
    if (this.props.reps && JSON.stringify(this.props.reps) !== "{}") {
      return this.props.reps.map(rep => (
        <div>
          <input placeholder="Exercise" value={rep.numberOfReps} />
          <input placeholder="Weight" value={rep.Weight} />
          <input placeholder="Reps" value={rep.Date} />
          <button type="submit" onClick={this.navigateToSocial} />
        </div>
      ));
    }
  }
}
export default withRouter(NewSet);
