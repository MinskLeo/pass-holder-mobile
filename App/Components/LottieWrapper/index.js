import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Lottie from 'lottie-react-native';

type Props = {
  source: Object,
  resizeMode: 'cover' | 'center' | 'contain',
  width: number | string,
  height: number | string,
  styleWrapper?: Object,
  styleLottie?: Object,
  loop?: boolean,
  autoplay?: boolean,
  speed?: number,
  imageAssetsFolder?: string,
  progress?: Any
}

class LoginScreen extends React.PureComponent<Props> {
  render() {
    const { width, height, styleWrapper, styleLottie, ...rest } = this.props;

    return (
      <View style={[styles.lottieContainer, (width && height) ? { width, height } : null, styleWrapper]}>
        <Lottie style={[styles.lottie, styleLottie]} {...rest} />
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  lottieContainer: {
    width: 150,
    height: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lottie: {
    width: '100%',
    height: '100%'
  }
});
