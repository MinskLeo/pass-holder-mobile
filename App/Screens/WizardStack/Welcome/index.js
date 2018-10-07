import * as React from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import Colors from 'App/Constants/Colors';
import DraggableScreens from 'App/Components/DraggableScreens';

// initial set (x=0, y=0)
// BreakPoints calc (screenWidths)
  // all breakpoints
  // left
  // right
// pan moving
  // recalc left and right breakpoints
// Release
  // moving screen to the point that closer
// Setting last state
  // left breakpoint
  // right
  // current pos
  // selected screen

class Welcome extends React.Component {
  static navigationOptions = () => {
    return {
      header: null
    }
  }

  render () {
    return (
      <DraggableScreens>
        <View style={styles.wrapper}>

        </View>
        <View style={styles.wrapper}>

        </View>
        <View style={styles.wrapper}>

        </View>
      </DraggableScreens>

    );
  }
}

export default Welcome;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.greenLight
  }
});
