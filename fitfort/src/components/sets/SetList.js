import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';

import {fetchSets} from '../../actions';

class SetList extends Component {
  componentDidMount() {
    this.props.fetchSets();
  }

  renderList(){
    return this.props.sets.map( set => {
      return(
        <View key={set.id}>
          <Text>{set.exercise} at {set.weight} lbs for {set.reps} reps</Text>
        </View>
      )
    })
  }

  render() {
    return(
      <View>
        {this.renderList()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { sets:  Object.values(state.sets)};
};

export default connect(
  mapStateToProps,
  {fetchSets}
)(SetList);
