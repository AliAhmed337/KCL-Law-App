import React from 'react';
import {View, ScrollView, KeyboardAvoidingView, AsyncStorage, StyleSheet} from 'react-native';
import {PrimaryInput} from '../custom_components/PrimaryInput'
import {LetsGetStarted} from '../custom_components/registration_screen/LetsGetStarted.js'
import {FormComponentButton} from '../custom_components/registration_screen/FormComponentButton'
import Constants from 'expo-constants';

const s = require('../stylesheet.js');

class LogInScreen extends React.Component {
  static navigationOptions = {header: null};

  constructor(props) {
      super(props);
      this.state = {email: "", password: "", givenName: "", familyName: "", isRegisteredUser: null};
  }

  render() {
    console.log(this.state);
    return (
        <KeyboardAvoidingView style={s.screenContainer} behavior="padding" >
            <View style={s.statusBar} />
            <ScrollView style={s.signInContainer} >
                <LetsGetStarted />

                { this.state.isRegisteredUser == null &&
                    <View>
                        <PrimaryInput label={'Email'} value={this.state.email}
                                      onChangeText={(email) => this.setState({email})} />
                        <FormComponentButton onPress={this._emailAssocWithUser}>Continue</FormComponentButton>
                        <FormComponentButton onPress={this._signInAsync}>Proceed</FormComponentButton>
                    </View>
                }

                { this.state.isRegisteredUser == true &&
                    <View>
                        <PrimaryInput label={'Email'} value={this.state.email}
                                      onChangeText={(email) => this.setState({email})} />
                        <PrimaryInput label={'Password'} value={this.state.password}
                                      onChangeText={(password) => this.setState({password})} />
                        <FormComponentButton onPress={this._emailAssocWithUser}>Continue</FormComponentButton>
                        <FormComponentButton onPress={this._signInAsync}>Proceed</FormComponentButton>
                    </View>
                }

                { this.state.isRegisteredUser == false &&
                <View>
                    <PrimaryInput label={'Email'} value={this.state.email}
                                  onChangeText={(email) => this.setState({email})} />
                    <PrimaryInput label={'Forename'} value={this.state.givenName}
                                  onChangeText={(givenName) => this.setState({givenName})} />
                    <PrimaryInput label={'Surname'} value={this.state.familyName}
                                  onChangeText={(familyName) => this.setState({familyName})} />
                    <PrimaryInput label={'Password'} value={this.state.password}
                                  onChangeText={(password) => this.setState({password})} />
                    <FormComponentButton onPress={this._emailAssocWithUser}>Continue</FormComponentButton>
                    <FormComponentButton onPress={this._signInAsync}>Proceed</FormComponentButton>
                </View>
                }

            </ScrollView>
        </KeyboardAvoidingView>
    );
  }

  _emailAssocWithUser = () => {
      this.state.isRegisteredUser = (this.state.email == "dom");
      this.forceUpdate();
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

}

export default LogInScreen;