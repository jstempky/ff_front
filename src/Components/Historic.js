import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import SetDetail from './SetDetail';


import "../App.css";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sets:[],
      jwt_token: "",
      weight: null,
      reps: null
    };

    // this.handleExChange = this.handleExChange.bind(this);
    // this.handleWeightChange = this.handleWeightChange.bind(this);
    // this.handleRepsChange = this.handleRepsChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => console.log(position),
    //   (err) => console.log(err)
    // );

    const testData = async () => {
      await axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => response).then(()=>console.log(this))
      .then(json => this.setState({sets: json.data}))
      .then(json => console.log(this.json.data))
  }
}


  navigateToDashboard = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    if (window.location.pathname ==="/history") {
      return (
        <div>
          <div className="tableContainer">
            <table>
              <tr>
                <th>Exercise</th>
                <th>Weight</th>
                <th>Reps</th>
                <th>Date</th>
                <th>Location</th>
              </tr>
              <SetDetail
                exercise="Squat"
                weight="135"
                reps="12"
                dateTime="8/12/19 5:30PM"
              />
              <SetDetail
                exercise="Squat"
                weight="185"
                reps="10"
                dateTime="8/12/19 5:30PM"
              />
              <SetDetail
                exercise="Squat"
                weight="225"
                reps="8"
                dateTime="8/12/19 5:30PM"
              />
            </table>
          </div>
        </div>
      )
    }
    else {
      return <div />;
    }
  }}


export default withRouter(History);
