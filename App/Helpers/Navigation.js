import { NavigationActions } from 'react-navigation';
let navigationRef = null;

export function setNavigationRef (ref) {
  navigationRef = ref;
}

class NavigationHelper {
  static navigateTo (routeName, params) {
    const navigateAction = NavigationActions.navigate({
      routeName: routeName,
      params: {...params}
    });

    navigationRef.dispatch(navigateAction);
    console.log('navigationRef: ', navigationRef);
  }

  static navigateToWithoutHistory () {

  }
}

export default NavigationHelper;