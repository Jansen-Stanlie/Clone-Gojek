/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Router from './src/config/router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    );
  }
}

export default App;
