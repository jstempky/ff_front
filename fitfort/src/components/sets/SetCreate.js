import React, { Component } from 'react';
import { Field, reduxForm, Form} from 'redux-form';
import {View, Text, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';
import { createSet} from '../../actions';

import {Card, CardSection} from '../common';

class SetCreate extends Component {
  renderError({error, touched}) {
    if (touched && error) {
      return <Text style={{flex:1, backgroundColor: 'white', color: 'red', fontWeight: 'bold'}}>{error}</Text>;
    }
  }

  renderInput = ({input, label, meta}) => {
    return(
      <View style={{ flex: 1, borderWidth: 1 }}>
        <Text style={{alignSelf: 'center', fontSize:20}}>{label}</Text>
        <TextInput style={{height:60, width: '100%', textAlign: 'center', fontSize: 26, backgroundColor: 'white'}}{...input} autoCorrect={false}/>
        {this.renderError(meta)}
      </View>
    )
  }

  onSubmit = (formValues) => {
    this.props.createSet(formValues);
  }

  render() {
    console.log(this.state)
    return (
      <Card style={{ flex: 1}}>
        <CardSection>
          <Field
            name="exercise"
            component={this.renderInput}
            label="Exercise"
          />
        </CardSection>
        <CardSection>
          <Field
            name="weight"
            component={this.renderInput}
            label="Weight"
          />
        </CardSection>
        <CardSection>
          <Field
            name="reps"
            component={this.renderInput}
            label="Reps"
          />
        </CardSection>
        <Button
          title="Submit"
          onPress= {this.props.handleSubmit(this.onSubmit)}
        />
      </Card>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.exercise) {
    errors.exercise = 'You must enter an exercise';
  }
  if (!formValues.weight) {
    errors.weight = 'You must enter a weight';
  }
  if (!formValues.reps) {
    errors.reps = 'You must enter the reps';
  }

  return errors;
};

const formWrapped =  reduxForm({
  form: 'setCreate',
  validate: validate
})(SetCreate);

export default connect( null, {createSet})(formWrapped);
