import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import './App.css';

class NewSet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: 'squat',
      weight: null,
      reps: null,
      sets:[]
    };

    this.handleExChange = this.handleExChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleRepsChange = this.handleRepsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){}
  componentWillUnmount(){}


  handleExChange(event) {this.setState({exercise: event.target.value});}
  handleWeightChange(event) {this.setState({weight: event.target.value});}
  handleRepsChange(event) {
    this.setState({reps: event.target.value});
  }

  handleSubmit(event) {
    alert( "Great Set!  " + this.state.exercise + " " + this.state.weight + "lbs for " + this.state.reps+ " reps");
    event.preventDefault();
  }

  render() {
    return (
      <form
        className="newSetContainer"
      >

        <select
          className="exerciseDropdown"
          value={this.state.exercise}
          onChange={this.handleExChange}
        >
          <option selected value="squat">Squat</option>
          <option value="bench press">Bench Press</option>
          <option value="Deadlift">Deadlift</option>
        </select>

        <input
          className="newSetField"
          placeholder="Weight"
          value={this.state.weight}
          onChange={this.handleWeightChange}
        />

        <input
          className="newSetField"
          placeholder="Reps"
          value={this.state.reps}
          onChange={this.handleRepsChange}
        />

        <button
          type="submit"
          color="yellow"
          className="newSetSubmitButton"
          onClick={this.handleSubmit}>
          Submit!
        </button>
        {this.state.exercise}
        {this.state.weight}
        {this.state.reps}
        {this.state.sets[0]}

      </form>
    );
  }
}
export default withRouter(NewSet);
