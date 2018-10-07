import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import TouchableComponent from 'App/Components/TouchableComponent';
import Text from 'App/Components/Text';
import Colors from 'App/Constants/Colors';

type Props = {
  type: 'android' | 'ios',
  children: string,
  style: Object,
  onPress: () => void,
  onLongPress: () => void
}

class Button extends React.PureComponent<Props> {
  render () {
    const { children, style, ...rest } = this.props;

    return (
      <TouchableComponent
        {...rest}
        style={[styles.wrapper, style]}
      >
        <Text style={styles.text}>{children}</Text>
      </TouchableComponent>
    );
  }
}

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.greenDark
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.textLight
  }
});
