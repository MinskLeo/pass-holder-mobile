import * as React from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import Colors from 'App/Constants/Colors';
import StorageService from 'App/Services/StorageService';
import NavigationHelper from 'App/Helpers/Navigation';

type Props = {

}

class CheckStorage extends React.Component<Props> {
  componentDidMount = async () => {
    const storage = await StorageService.loadStorage();

    if(storage) {
      NavigationHelper.navigateWithoutHistory('LoginScreen',  this.props.navigation, {storage});
    } else {
      this.props.navigation.navigate('Welcome');
    }
  }

  static navigationOptions = () => {
    return {
      header: null
    }
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator color={Colors.greenDark} />
      </View>
    );
  }
}

export default CheckStorage;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bg
  }
});
