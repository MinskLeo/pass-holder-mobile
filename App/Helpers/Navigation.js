// @flow
import { StackActions, NavigationActions } from 'react-navigation';

let _navigator = null;

export function setNavigator(ref) {
  _navigator = ref;
}

export default class NavigationHelper {
  static navigateWithoutHistory(routeName, navigation, params) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName, key: routeName, params: {...params} })],
    });

    navigation.dispatch(resetAction);
  }

  static navigateWithoutHistoryGlobal(routeName) {
    console.log('NAVIGATOR: ', _navigator);
    console.log('Trying to navigate by  WITHOUT HIST GLOBAL...')

    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName, key: routeName })],
    });

    _navigator.dispatch(resetAction);
    console.log('Successfully navigated WITHOUT HIST by GLOBAL!');
  }

  static navigateToGlobal(routeName, params) {
    console.log('Trying to navigate by GLOBAL...')
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
    console.log('Successfully navigated by GLOBAL!');
  }
}
