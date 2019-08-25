import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null,
      results: []
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){}
  componentWillUnmount(){}


  handleSearchChange(event) {this.setState({searchValue: event.target.value});}

  handleSubmit(event) {
    alert( "Great Search!  " + this.state.searchValue );
    event.preventDefault();
  }


  render() {
    return(
      <div
        className="addFriendContainer"
      >
        <h1>Add Friends!</h1>
        <input
          className="searchFriendField"
          placeholder="Find friends!"
          value={this.state.searchValue}
          onChange={this.handleSearchChange}
        />
        <button
          type="submit"
          color="yellow"
          className="newSetSubmitButton"
          onClick={this.handleSubmit}>
          Submit!
        </button>
        {this.state.searchValue}
      </div>
    )
  }
}

export default withRouter(AddFriend);
