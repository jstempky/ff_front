import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return(
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles ={
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#e1bee7',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    height: 100
  }

};

export {CardSection};
