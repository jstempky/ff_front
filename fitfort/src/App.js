// FITFORT MOBILE APP //

//  External Library Imports
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';


import { composeWithDevTools } from 'remote-redux-devtools';

// WTF
import { Header } from './components/common/';
import SignIn from './screens/SignIn';
import SetCreate from './components/sets/SetCreate';
import SetList from './components/sets/SetList';
import SetForm from './components/SetForm';

//  WTF
import reducers from './reducers';

//  Advanced Store setup for redux devtools

const store = createStore(
  reducers,
  applyMiddleware(reduxThunk)
);


// SETLIST IS CAUSING CURRENT ISSUE -->  mapStateToProps in SetList;
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header />
          <ScrollView>
            <SetCreate />
            <SetList/>
          </ScrollView>
        </View>
      </Provider>
    );
  }
};

//  Make the App available to ''../index.js'
export default App;
