import React, { Component} from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

import { Header, Input, Card, CardSection} from '../components/common';

class UserDashboard extends Component {
  render() {
    return (
      <Card style={{alignItems: 'center', justify:'center'}}>
        <CardSection
          style={{alignSelf: 'center', justifyContent: 'center'}}
        >
          <Image
          source={require('../../resources/jacob.png')}
          style={{
            width: 50,
            height: 50
          }}/>
        </CardSection>
        <Text style={{ fontSize: 20, alignSelf: 'center', fontWeight: 'bold'}}>Welcome, Chad!</Text>
        <CardSection style={{alignItems: 'center', justify:'center'}}>
          <Card>
            <Button
              title='Data'
              onPress={() => console.log('Go to data page!')}
            />
          </Card>
          <Card>
            <Button
              title='New Set'
              onPress={() => console.log('Go to data page!')}
            />
          </Card>
          <Card>
            <Button
              title='History'
              onPress={() => console.log('Go to history page!')}
            />
          </Card>
          <Card>
            <Button
              title='Profile'
              onPress={() => console.log('Go to data page!')}
            />
          </Card>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Avenir',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UserDashboard;
