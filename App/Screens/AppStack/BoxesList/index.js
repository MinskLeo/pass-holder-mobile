import * as React from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import Text from 'App/Components/Text';
import Colors, { boxColors } from 'App/Constants/Colors';
import BoxCard from 'App/Components/BoxCard';
import NavigationHelper from 'App/Helpers/Navigation';

class BoxesList extends React.Component {
  static navigationOptions = () => {
    return {
      
    }
  }

  navigateTo = () => {
    NavigationHelper.navigateTo('LoginScreen');
  }


  render () {
    return (
      <ScrollView style={styles.wrapper} contentContainerStyle={styles.wrapperContent}>
        <BoxCard onPress={this.navigateTo} color={boxColors[0]} boxName='New Box' boxDescription='Short description of box'/>
        <BoxCard color={boxColors[1]} boxName='New Box' boxDescription='Short description of box'/>
        <BoxCard color={boxColors[2]} boxName='New Box' boxDescription='Short description of box'/>
        <BoxCard color={boxColors[3]} boxName='New Box' boxDescription='Short description of box'/>
        <BoxCard color={boxColors[4]} boxName='New Box' boxDescription='Short description of box'/>
        <BoxCard color={boxColors[5]} boxName='New Box' boxDescription='Short description of box'/>
        <BoxCard color={boxColors[6]} boxName='New Box' boxDescription='Short description of box'/>
        <BoxCard color={boxColors[7]} boxName='New Box' boxDescription='Short description of box'/>
      </ScrollView>
    );
  }
}

export default BoxesList;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.bg
  },
  wrapperContent: {
    backgroundColor: Colors.bg,
    padding: 30
  }
});
