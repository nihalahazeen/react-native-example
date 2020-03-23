import * as React from 'react';
import AppContainer from "./src/navigation/AppNavigator";
export default class DefaultScreen extends React.Component {
  render() {
    console.disableYellowBox = true
    return (
    <AppContainer/>
    );
  }
}