// @flow
import * as React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

type Props = {
  style: object,
  children: React.Component | React.PureComponent,
  onPress: () => any,
  onLongPress?: () => any,
  type: 'android' | 'ios',
  disabled?: boolean,
  disabledType?: 'onlyStyle' | 'noClick' | 'both'
}

export default class TouchableComponent extends React.PureComponent<Props> {
  render () {
    const { style, type, disabled, disabledType, ...rest  } = this.props;
    let clickDisable = null;
    let disabledStyle = null;

    if(disabled && disabledType) {
      if(disabledType==='noClick') {
        clickDisable=true;
      }else if (disabledType==='onlyStyle'){
        clickDisable=false;
        disabledStyle = {
          opacity: 0.5
        };
      }else if(clickDisable === 'both'){
        clickDisable = true;
        disabledStyle = {
          opacity: 0.5
        };
      }else {
        clickDisable=false;
      }
    } else if(disabled && !disabledType) {
      clickDisable=true;
      disabledStyle = {
        opacity: 0.5
      };
    } else {
      clickDisable = false;
    }

    const isStyleArray = Array.isArray(style);


    if(type==='android' && Platform.OS==='android') {
      return (
        <TouchableNativeFeedback
          disabled={clickDisable}
          {...rest}
        >
          <View style={isStyleArray ? [...style] : { ...style }}>
            {this.props.children}
          </View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity
        style={[style, disabledStyle]}
        disabled={clickDisable}
        {...rest}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}
