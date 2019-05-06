import React, {Component} from 'react';

// These go away when we switch to our navigation method
import {Text, View, Image, StyleSheet } from 'react-native';
// mobile equivalent to:  'import Router from './Router';'
//  The router gets nested within the Provider tags

import { Header, Input, CardSection} from '../components/common';

//import {createStackNavigator, createAppContainer} from 'react-navigation';


class MaxExSet extends Component {
  render() {
    return (
      <Card>
        <Text>Login</Text>
        <Text>Home Page: New Set Form</Text>
        <CardSection>
          <Input
            label="Email"
            placeholder='placeholder'
            autoCorrect={false}
          />
        </CardSection>
        <CardSection>
          <Image
            source={require('../../resources/jacob.png')}
            style={{ width: 50, height: 50 }}
          />
        </CardSection>
      </Card>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Avenir',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MaxExSet;
