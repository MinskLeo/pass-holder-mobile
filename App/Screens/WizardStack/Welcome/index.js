import * as React from 'react';
import {
  ScrollView,
  View,
  StyleSheet
} from 'react-native';
import Colors from 'App/Constants/Colors';
import DraggableScreens from 'App/Components/DraggableScreens';
import Text from 'App/Components/Text';
import TextInput from 'App/Components/Form/TextInput';
import TextArea from 'App/Components/Form/TextArea';
import TouchableComponent from 'App/Components/TouchableComponent';
import ColorPicker from 'App/Components/Form/ColorPicker';
import BoxCard from 'App/Components/BoxCard';
import ValidationHelper from 'App/Helpers/Validation';
import ValidationConfig from 'App/Configs/Validation';
import StorageService from 'App/Services/StorageService';

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
  state = {
    passwordValue: '',
    passwordFieldVisible: false,
    boxName: '',
    boxDescription: '',
    selectedColor: '',
    blockNext: false
  }

  static navigationOptions = () => {
    return {
      header: null
    }
  }

  componentDidMount = () => {
    StorageService.loadStorage()
    .then( storage => {
      console.log('storage: ', storage);
    })
  }

  changePasswordVisibility = () => {
    const { passwordFieldVisible } = this.state;

    this.setState({
      passwordFieldVisible: !passwordFieldVisible
    });
  }

  onChangePasswordField = (text) => {
    this.setState({
      passwordValue: text
    });
  }

  onChangeBoxName = (text) => {
    this.setState({
      boxName: text
    });
  }

  onChangeBoxDescription = (text) => {
    this.setState({
      boxDescription: text
    });
  }

  onChangeColor = (color) => {
    this.setState({
      selectedColor: color
    });
  }

  onFinish = async () => {
    const {
      passwordValue,
      boxName,
      boxDescription,
      selectedColor
    } = this.state;

    const newStorage = {
      key: passwordValue,
      boxes: [
        {
          name: boxName,
          description: boxDescription,
          color: selectedColor,
          data: [

          ]
        }
      ]
    }
    
    await StorageService.saveStorage(newStorage);

    this.props.navigation.navigate('AuthStack');
  }

  render () {
    const {
      passwordFieldVisible,
      passwordValue,
      selectedColor,
      boxName,
      boxDescription,
      blockNext
    } = this.state;

    return (
      <DraggableScreens animationDuration={400} onFinal={this.onFinish}>
        {/* Welcome */}
        <View style={styles.wrapper}>
          <View style={styles.textCard}>
            <Text color='light' style={styles.text}>Hello!</Text>
            <Text color='light' style={styles.text}>Welcome to the PassHolder App!</Text>
            <Text color='light' style={styles.text}>There you can store all your passwords in one secure place!</Text>
            <Text color='light' style={styles.text}>That wizard will help you in that adventure</Text>
          </View>
        </View>
        {/* Creating KEY */}
        <View style={styles.wrapper}>
          <Text style={styles.textDark}>Now, we need to make a special KEY for you</Text>
          <Text style={styles.textDark}>So - do that!</Text>
          <TextInput
            passwordField
            stylesWrapper={styles.input}
            onChangeText={this.onChangePasswordField}
            value={passwordValue}
            validationFunc={ValidationHelper.password}
            labelContent='key-variant'
            maxLength={ValidationConfig.passwordMax}
            keyboardType='numeric'
          />
        </View>
        {/* KeyCheck */}
        <View style={styles.wrapper}>
          <View style={styles.textCard}>
            <Text style={styles.textLight}>Please, check your KEY</Text>
            <Text style={styles.textLight}>(in private place of course)</Text>
            <TouchableComponent
              type='ios'
              onPress={this.changePasswordVisibility}
            >
              <Text style={styles.bigLightText} color='light'>{passwordFieldVisible ? passwordValue : 'Click me to see'}</Text>
            </TouchableComponent>
          </View>
        </View>
        {/* Welcome. BOXES */}
        <View style={styles.wrapper}>
          <Text style={styles.textDark}>Now, are going for the concept of BOXES</Text>
          <Text style={styles.textDark}>BOX is like a category</Text>
          <Text style={styles.textDark}>Like an independent store</Text>
          <Text style={styles.textDark}>We need to create at least one BOX</Text>
          <Text style={styles.textDark}>So - let's start!</Text>
        </View>
        {/* BOX creation */}
        <View style={styles.wrapper}>
          <TextInput
            labelContent='Name'
            labelType='text'
            onChangeText={this.onChangeBoxName}
            value={boxName}
          />
          <TextArea
            label='Description'
            onChangeText={this.onChangeBoxDescription}
            value={boxDescription}
          />
          <Text style={styles.textDark}>And select color for your BOX</Text>
          <ColorPicker selectedColor={selectedColor} onChange={this.onChangeColor} />
        </View>
        {/* Box creation success */}
        <View style={styles.wrapper}>
          <View style={styles.textCard}>
            <Text color='light' style={styles.text}>That's it!</Text>
            <Text color='light' style={styles.text}>Everything done, and your BOX too:</Text>
            <BoxCard boxName={boxName} boxDescription={boxDescription} color={selectedColor} />
          </View>
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
    padding: 20
    // backgroundColor: Colors.greenLight
  },
  textCard: {
    width: '80%',
    maxWidth: '80%',
    backgroundColor: Colors.greenDark,
    padding: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    borderRadius: 2
  },
  text: {
    width: '100%',
    textAlign: 'left',
    marginVertical: 5,
  },
  textDark: {
    width: '100%',
    marginVertical: 5,
    textAlign: 'center',
    color: Colors.greenLight,
    fontSize: 18
  },
  textLight: {
    width: '100%',
    marginVertical: 5,
    textAlign: 'center',
    color: Colors.textLight,
    fontSize: 16
  },
  bigLightText: {
    fontSize: 20,
    marginVertical: 20
  },
  input: {
    marginVertical: 15
  }
});
