import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { setUpdate } from '../actions';
import { CardSection, Input } from './common';

class SetForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Reps"
            placeholder="12"
            value={this.props.reps}
            onChangeText={value => this.props.setUpdate({ prop: 'reps', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Weight"
            placeholder="225 lbs"
            value={this.props.weight}
            onChangeText={value => this.props.setUpdate({ prop: 'weight', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Set</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.exercise}
            onValueChange={value => this.props.setUpdate({ prop: 'exercise', value })}
          >
            <Picker.Item label="Squat" value="Squat" />
            <Picker.Item label="Deadlift" value="Deadlift" />
            <Picker.Item label="Bench Press" value="Bench Press" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { exercise, reps, weight } = state.SetForm;

  return { exercise, reps, weight };
};

export default connect(mapStateToProps, { setUpdate })(SetForm);
