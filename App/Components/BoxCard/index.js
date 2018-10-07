import * as React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import TouchableComponent from 'App/Components/TouchableComponent';
import Text from 'App/Components/Text';


type Props = {
  color: string,
  boxName: string,
  boxDescription: string,
  onPress: () => void,
  onLongPress: () => void
}

class BoxCard extends React.PureComponent<Props> {
  render () {
    const { color, boxDescription, boxName, onPress, onLongPress } = this.props;

    return (
      <TouchableComponent
        style={[styles.wrapper, { backgroundColor: color }]}
        type='android'
        onPress={onPress}
      >
        <Text color='light' type='bold'>{boxName}</Text>
        <Text color='light'>{boxDescription}</Text>
      </TouchableComponent>
    );
  }
}

export default BoxCard;


const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    height: 200,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 20,
    marginVertical: 20,
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 1
  }
});
