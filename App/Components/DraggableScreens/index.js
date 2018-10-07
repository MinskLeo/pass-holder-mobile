import * as React from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  PanResponder
} from 'react-native';

const screenSizes = Dimensions.get('screen');

type Props = {
  children: Any
}

class DraggableScreens extends React.Component<Props> {
  state = {
    breakPoints: [],
    nearestBreakpoint: '0',
    
  }

  calculateNearestBreakpoint = (currentX) => {
    const { breakPoints } = this.state;

    let currentIndex = Math.abs((breakPoints.length - 1) / 2);
    let leftBreakPoint = currentIndex==0 ? '0' : breakPoints[currentIndex-1];
    let rightBreakPoint = currentIndex == (breakPoints.length-1) ? breakPoints[breakPoints.length-1] : breakPoints[currentIndex + 1];

    console.log(`${currentIndex} ${leftBreakPoint} ${rightBreakPoint}`)
  }

  calculateBreakpoints = (arr) => {
    const breakPoints = [];
    breakPoints[breakPoints.length] = '0';

    let stackValue = 0;
    for(let i=0;i<arr.length;i++) {
      stackValue+=screenSizes.width;
      breakPoints[breakPoints.length] = stackValue;
    }

    return breakPoints;
  }

  componentDidMount = () => {
    const { children } = this.props;

    const breakPoints = this.calculateBreakpoints(children);
    const nearest = this.calculateNearestBreakpoint('0');
  }

  render () {
    const { children } = this.props;
    console.log(children);

    return (
      <View style={styles.wrapper}>
        <View style={styles.innerContainer}>
          {children}
        </View>
      </View>
    );
  }
}

export default DraggableScreens;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%'
  },
  innerContainer: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
