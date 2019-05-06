import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, Button, Image, StyleSheet} from 'react-native';
// mobile equivalent to:  'import Router from './Router';'
//  The router gets nested within the Provider tags

import { Header, Input, Card, CardSection} from '../components/common';
import { createSet } from '../actions';
import SetForm from '../components/SetForm';


//import {createStackNavigator, createAppContainer} from 'react-navigation';

class NewSet extends Component {
  state = {
    set_id: 1,
    username: 'JStemp12',
    exercise: 'Squat',
    reps: 15,
    weight: 225,
    location: 'LA Fitness Plymouth, MI'
  }

  onButtonPress() {
    const { exercise, reps, weight } = this.props;

    this.props.createSet({ exercise, reps, weight });
  }

  render() {
    return (
      <Card>
        <Text style={styles.title}>
          New Set
        </Text>
        <SetForm {...this.props} />
        <CardSection
          style={{ alignItems: 'center', justifyContent: 'center'}}
        >
          <Text
            style={styles.title}
          >
            Exercise
          </Text>
          <Image
            source={require('../../resources/squat_icon.png')}
            style={styles.icon}
          />
          <Image
            source={require('../../resources/benchpress_icon.png')}
            style={styles.icon}
          />
          <Image
            source={require('../../resources/deadlift_icon.png')}
            style={styles.icon}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Exercise"
            placeholder='Squat'
            autoCorrect={false}
            onChangeText={(exercise) => this.setState({exercise})}
            value={this.props.exercise}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Weight"
            placeholder='225 lbs'
            autoCorrect={false}
            onChangeText={(weight) => this.setState({weight})}
            value={this.props.weight}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Reps"
            placeholder='12'
            autoCorrect={false}
            onChangeText={(reps) => this.setState({reps})}
            value={this.props.reps}
          />
        </CardSection>
        <Button
          title="Submit!"
          onPress={this.onButtonPress.bind(this)}
        />
        {this.onSubmit()}
      </Card>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  exerciseLabel: {

  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 30,
    borderRadius: 5
  },
});

const mapStateToProps = state => {
  const { exercise, reps, weight } = state.SetForm;

  return { exercise, reps, weight };
}

// const mapStateToProps = (state) => {
//   const { name, phone, shift } = state.employeeForm;
//
//   return { name, phone, shift };
// };
export default NewSet;
//export default connect(mapStateToProps)(BookDetail);
//export default connect(mapStateToProps, {createSet}) (NewSet);
