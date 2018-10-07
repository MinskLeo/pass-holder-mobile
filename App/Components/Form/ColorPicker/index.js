import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Colors, { boxColors} from 'App/Constants/Colors';
import TouchableComponent from 'App/Components/TouchableComponent';

type Props = {
  selectedColor: string,
  onChange: (color: string) => void
}


class ColorPicker extends React.PureComponent<Props> {
  componentDidMount = () => {
   this.props.onChange(boxColors[0]);
  }

  renderColoredSquare = (item, index) => {
    const { onChange, selectedColor } = this.props;
    return (
      <TouchableComponent
        key={index}
        type='android'
        onPress={()=>onChange(item)}
        style={[styles.square, { backgroundColor: item }, item===selectedColor ? styles.squareActive : null]}
      />
    );
  }

  render () {
    return (
      <View style={styles.wrapper}>
        {boxColors.map( (item, index) => {
          return this.renderColoredSquare(item, index);
        })}

      </View>
    );
  }
}

export default ColorPicker;

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap'
  },
  square: {
    width: 48,
    height: 48
  },
  squareActive: {
    borderColor: Colors.greenDark,
    borderWidth: 3
  }
});
