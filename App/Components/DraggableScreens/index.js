import * as React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';
import Colors from 'App/Constants/Colors';
import * as Animatable from 'react-native-animatable';
import TouchableComponent from 'App/Components/TouchableComponent';
import Text from 'App/Components/Text';

type Props = {
  children: Any,
  animationDuration?: number,
  styleContent?: Object,
  styleNavigationBar?: Object,
  styleNavigationButton?: Object,
  blockNext?: boolean,
  onFinal?: () => void
}

class DraggableScreens extends React.Component<Props> {
  state = {
    fadeInOpacity: new Animated.Value(0),
    currentPage: 0,
    inTransitionState: true,
  }

  animateAndNextValue = (nextValue) => {
    const { animationDuration } = this.props;
    this.setState({
      inTransitionState: true
    });
    Animated.timing(this.state.fadeInOpacity, {
      toValue: 0,
      duration: animationDuration || 1000
    }).start(() => {

      this.setState({
        currentPage: nextValue
      }, () => {
        Animated.timing(this.state.fadeInOpacity, {
          toValue: 1,
          duration: animationDuration || 1000
        }).start( () => {
          this.setState({
            inTransitionState: false
          })
        });
      });
    });
  }

  onNextPress = () => {
    const { currentPage } = this.state;
    const { children } = this.props;
    let nextValue = 0;

    if(currentPage<children.length-1) {
      nextValue = currentPage + 1;
      this.animateAndNextValue(nextValue);
    }
  }

  onFinalPress = () => {
    const { onFinal } = this.props;

    if(onFinal) {
      onFinal();
    }
  }

  onPrevPress = () => {
    const { currentPage } = this.state;
    let nextValue = 0;

    if(currentPage>0) {
      nextValue = currentPage - 1;
      this.animateAndNextValue(nextValue);
    }


  }

  componentDidMount = () => {
    const { animationDuration } = this.props;
    Animated.timing(this.state.fadeInOpacity,{
      toValue: 1,
      duration: animationDuration || 1000
    }).start( () => {
      this.setState({
        inTransitionState: false
      });
    });
  }

  render () {
    const { children, blockNext } = this.props;
    const { fadeInOpacity, currentPage, inTransitionState } = this.state;
    const isArray = Array.isArray(children);
    const isFinalState = !isArray || currentPage === children.length - 1;

    return (
      <View style={styles.wrapper}>
        <Animatable.View style={[styles.contentContainer, {opacity: fadeInOpacity}]} ref={input=>this.contentContainer=input}>
          {isArray ? children[currentPage] : children}
          {/* {children[5]} */}
        </Animatable.View>
        <View style={styles.navigationBar}>
          <TouchableComponent
            type='android'
            style={styles.navigationBarButton}
            onPress={this.onPrevPress}
            disabled={inTransitionState || currentPage==0}
          >
            {currentPage>0 && <Text color='light'>Back</Text>}
          </TouchableComponent>
          <TouchableComponent
            type='android'
            style={styles.navigationBarButton}
            onPress={isFinalState ? this.onFinalPress : this.onNextPress}
            disabled={inTransitionState || blockNext}
          >
            {!blockNext && <Text color='light'>{isFinalState ? 'Finish' : 'Next'}</Text>}
          </TouchableComponent>
        </View>
      </View>
    );
  }
}

export default DraggableScreens;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.bg
  },
  contentContainer: {
    height: '92%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bg
  },
  navigationBar: {
    width: '100%',
    height: '8%',
    backgroundColor: Colors.greenDark,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navigationBarButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
});
