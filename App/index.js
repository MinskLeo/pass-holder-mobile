import * as React from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';
import Navigation from 'App/Navigation';
import { setNavigationRef } from 'App/Helpers/Navigation';
import Colors from 'App/Constants/Colors';

class App extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor={Colors.greenDark} />
        <Navigation ref={input => setNavigationRef(input)} />
      </View>
    );
  }
}

export default App;
