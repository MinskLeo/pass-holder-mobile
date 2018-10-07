import * as React from 'react';
import {
  View,
  TextInput,
  StyleSheet
} from 'react-native';
import Colors from 'App/Constants/Colors';
import Text from 'App/Components/Text';
import Image from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  stylesWrapper?: Object,
  stylesInput?: Object,
  stylesSeparator?: Object,
  disabled?: boolean,
  keyboardType?: string,
  placeholder?: string,
  passwordField?: boolean,
  value: string,
  onChangeText?: () => void,
}

class Input extends React.Component<Props> {
  state = {
    touched: false
  }

  onTouchAction = (touched) => {
    this.setState({
      touched
    });
  }

  render () {
    const { disabled, keyboardType, placeholder, passwordField, label, value, onChangeText } = this.props;
    const { touched } = this.state;

    return (
      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <View style={styles.labelContainer}>
            <Image style={styles.label} name='key-variant' />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            editable={!disabled}
            keyboardType={typeof keyboardType !== 'undefined' ? keyboardType : null}
            allowFontScaling={true}
            autoCorrect={false}
            secureTextEntry={passwordField}
            value={value}
          />
        </View>
        
        <View style={styles.separator} />
      </View>
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 50,
    paddingBottom: 10
  },
  input: {
    flex: 10,
    height: 50,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5
  },
  separator: {
    width: '100%',
    backgroundColor: Colors.greenLight,
    height: 2,
    borderRadius: 2
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  labelContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    left: 0,
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bg
  },
  label: {
    fontSize: 25,
    color: Colors.greenLight
  }
});
