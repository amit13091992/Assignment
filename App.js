import React, { Component } from 'react';

import AppContainer from './src/components/AppContainer';
import NavigationService from './src/services/NavigationService';

console.disableYellowBox = true;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppContainer ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef); }} />
    );
  }
}