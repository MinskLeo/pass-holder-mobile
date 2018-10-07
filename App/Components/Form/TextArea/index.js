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
  disabled?: boolean,
  keyboardType?: string,
  placeholder?: string,
  value: string,
  label?: string,
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

  render() {
    const {
      disabled,
      keyboardType,
      placeholder,
      passwordField,
      label,
      value,
      onChangeText,
      stylesWrapper
    } = this.props;
    const { touched } = this.state;

    return (
      <View style={[styles.wrapper, stylesWrapper]}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            editable={!disabled}
            keyboardType={typeof keyboardType !== 'undefined' ? keyboardType : null}
            allowFontScaling={true}
            autoCorrect={false}
            secureTextEntry={passwordField}
            value={value}
            numberOfLines={1}
            multiline={false}
            textBreakStrategy='highQuality'
          />
        </View>
      </View>
    );
  }
}

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 30
  },
  labelContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10
  },
  label: {
    color: Colors.greenDark,
    fontSize: 18
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: Colors.greenDark,
    borderWidth: 1
  },
  input: {
    flex: 10,
    fontSize: 20,
  }
});
