import React from 'react';
import {View, KeyboardAvoidingView, AsyncStorage, StyleSheet} from 'react-native';
import {PrimaryInput} from '../custom_components/PrimaryInput'
import {LetsGetStarted} from '../custom_components/registration_screen/LetsGetStarted.js'
import {FormComponentButton} from '../custom_components/registration_screen/FormComponentButton'
import Constants from 'expo-constants';

const s = require('../stylesheet.js');

class LogInScreen extends React.Component {
  static navigationOptions = {header: null};

  constructor(props) {
      super(props);
      this.state = {email: "", isRegisteredUser: null};
  }

  render() {
    return (
        <KeyboardAvoidingView style={s.screenContainer} behavior="padding" >
            <View style={s.statusBar} />
            <View style={s.signInContainer} >
                <LetsGetStarted />
                <PrimaryInput label={'Email'} placeholder={'Enter your email address'}
                    value={this.state.email} onChangeText={(email) => this.setState({email})} />
                <FormComponentButton onPress={this._emailAssocWithUser}>Continue</FormComponentButton>
                <FormComponentButton onPress={this._signInAsync}>Proceed</FormComponentButton>
            </View>
        </KeyboardAvoidingView>
    );
  }

  _emailAssocWithUser = () => {
      this.state.isRegisteredUser = (this.state.email == "dom");
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

}

export default LogInScreen;