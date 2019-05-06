import React, {Component} from 'react';

// These go away when we switch to our navigation method
import {Text, View, Button, Image, StyleSheet} from 'react-native';
// mobile equivalent to:  'import Router from './Router';'
//  The router gets nested within the Provider tags

import { Header, Input, Card, CardSection} from '../components/common';

//import {createStackNavigator, createAppContainer} from 'react-navigation';


class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder='gainz@email.com'
            autoCorrect={false}
            onChangeText={(email) => this.setState({email})}
            value={this.state.text}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder='password123'
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.text}
          />
        </CardSection>
        <Button
          title="Login!"
          onPress={() => console.log(this.state)}
        />
      </Card>
    );
  }
};


export default SignIn;
