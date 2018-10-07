import * as React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';
import Fonts from 'App/Constants/Fonts';
import Colors from 'App/Constants/Colors';

type Props = {
  children: string,
  style?: Object,
  type?: 'bold' | 'regular',
  italic?: boolean,
  color?: 'light' | 'dark'
}

class CustomText extends React.PureComponent<Props> {
  render () {
    const { children, style, color, type, italic } = this.props;
    const additionalStyles = {
      color: color==='light' ? Colors.textLight : Colors.textDark,
      fontWeight: type==='bold' ? 'bold' : '400',
      fontStyle: italic ? italic : null
    }

    return (
      <Text style={[styles.text, additionalStyles, style ]}>{children}</Text>
    );
  }
}

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.SegoeUI,
    fontSize: 16
  }
});
