import {
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import Colors from 'App/Constants/Colors';

// Wizard
import Welcome from 'App/Screens/WizardStack/Welcome';

// Auth
import LoginScreen from 'App/Screens/AuthStack/LoginScreen';
import CheckStorage from 'App/Screens/AuthStack/CheckStorage';

// App
import BoxesList from 'App/Screens/AppStack/BoxesList';

const AppStack = createStackNavigator({
  BoxesList
},{
  navigationOptions: () => {
    return {
      headerStyle: {
        backgroundColor: Colors.greenLight,
      }
    }
  }
});

const WizardStack = createStackNavigator({
  Welcome
},
{
  navigationOptions: () => {
    return {
      headerStyle: {
        backgroundColor: Colors.greenLight,
      }
    }
  }
});

const AuthStack = createStackNavigator({
  CheckStorage,
  LoginScreen,
},{
  initialRouteName: 'CheckStorage'
});


const Navigation = createSwitchNavigator({
  AuthStack,
  WizardStack,
  AppStack
}, {
  initialRouteName: 'AuthStack'
});

export default Navigation;