// import libraries
import React from 'react';
import { Text, View, Image } from 'react-native';

// make a component
const Header = (props) => {
  const { textStyle, viewStyle, homeButtonStyle, settingButtonStyle } = styles;

  return (
    <View style={viewStyle}>
      <Image source={require('../../../resources/logo.png')} style={{ width: 50, height: 50 }}/>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#9c27b0',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
    borderRadius: 5,
    flexDirection: 'row'
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  homeButtonStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  settingButtonStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  }
};

// Make component available to other parts of the app
export { Header };
