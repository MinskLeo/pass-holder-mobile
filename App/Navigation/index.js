import {
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import Colors from 'App/Constants/Colors';

// Wizard
import Welcome from 'App/Screens/WizardStack/Welcome';

// Auth
import LoginScreen from 'App/Screens/AuthStack/LoginScreen';

// App
import BoxesList from 'App/Screens/AuthStack/BoxesList';

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
  BoxesList,
  LoginScreen
},{
  initialRouteName: 'LoginScreen'
});

const AppStack = createStackNavigator({
  LoginScreen
});

const Navigation = createSwitchNavigator({
  WizardStack,
  AuthStack,
  AppStack
}, {
  initialRouteName: 'WizardStack'
});

export default Navigation;