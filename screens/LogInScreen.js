import React from 'react';
import {Text, View, KeyboardAvoidingView, Image, TextInput, AsyncStorage, StyleSheet} from 'react-native';
import {PrimaryButton} from '../custom_components/PrimaryButton'
import Constants from 'expo-constants';

const s = require('../stylesheet.js');

class LogInScreen extends React.Component {
  static navigationOptions = {header: null};

  render() {
    return (
        <KeyboardAvoidingView style={s.screenContainer} behavior="padding" >
            <View style={s.statusBar} />
            <View style={s.signInContainer} >

                <Image style={s.welcomeShield} source={require("../assets/images/shield.png")}/>
                <Text style={s.letsGetStarted}>Let's get started</Text>
                <Text style={s.welcomeText}>Log in, or sign up, to discover KCL Law Society</Text>

                <View style={s.formComponent}>
                    <Text style={s.formComponentHeader}>Email</Text>
                    <TextInput style={s.formComponentInput} placeholder = "Enter your email address"/>
                </View>

                <View style={s.formComponent}>
                    <PrimaryButton onPress={this._signInAsync} />
                </View>

            </View>
        </KeyboardAvoidingView>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

export default LogInScreen;