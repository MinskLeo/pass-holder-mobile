import * as React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';
import Colors from 'App/Constants/Colors';
import TextInput from 'App/Components/Form/TextInput';
import LottieWrapper from 'App/Components/LottieWrapper';
import anim_shield from 'assets/AE/shield_greenDark_004c40.json';
import anim_shield_light from 'assets/AE/shield_greenLight_00796b.json';
import Text from 'App/Components/Text';
import Button from 'App/Components/Form/Button';
import NavigationHelper from 'App/Helpers/Navigation';

import AuthService from 'App/Services/AuthService';


class LoginScreen extends React.Component {
  state = {
    lottieProgress: new Animated.Value(0),
    keyValue: '',
    isTransitioning: false
  }

  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: Colors.greenLight,
      }
    }
  }


  onKeyFieldChange = (text) => {
    this.setState({
      keyValue: text
    });
    
    const isIdentified = AuthService.checkKey(text);
    if (isIdentified) {
      this.setState({
        isTransitioning: true
      })
      Animated.timing(this.state.lottieProgress, {
        toValue: 0.5,
        duration: 640,
        easing: Easing.ease
      }).start(() => {
        this.props.navigation.navigate('BoxesList');
      });
    }
  }

  render () {
    const { lottieProgress, keyValue, isTransitioning } = this.state;

    return (
      <View style={styles.wrapper}>
        <Text style={styles.title} type='regular'>Type your key</Text>
        <LottieWrapper
          source={anim_shield_light}
          styleWrapper={styles.lottie}
          loop
          resizeMode='cover'
          progress={lottieProgress}
        />
        <TextInput
          passwordField
          onChangeText={this.onKeyFieldChange}
          value={keyValue}
          disabled={isTransitioning}
        />
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.bg,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: Colors.greenDark,
    marginBottom: 20
  },
  lottie: {
    marginBottom: 35
  },
  button: {
    marginTop: 30
  }
});
