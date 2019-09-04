import React from 'react';
import {View, ScrollView, KeyboardAvoidingView, AsyncStorage, StyleSheet} from 'react-native';
import {PrimaryInput} from '../custom_components/PrimaryInput'
import {LetsGetStarted} from '../custom_components/registration_screen/LetsGetStarted.js'
import {FormComponentButton} from '../custom_components/registration_screen/FormComponentButton'
import { StatusBar } from '../custom_components/StatusBar'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { determine_email_assoc_with_account } from '../actions/authActions';

const s = StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#fff",
        alignItems: 'center',
    },
    signInContainer: {
        flex: 0,
        padding: 20
    }
});

class LogInScreen extends React.Component {
  static navigationOptions = {header: null};

  constructor(props) {
      super(props);
      this.state = {email: "", password: "", givenName: "", familyName: ""};
  }

  render() {
    return (
        <KeyboardAvoidingView style={s.screenContainer} behavior="padding" >
            <StatusBar/>
            <ScrollView style={s.signInContainer} >
                <LetsGetStarted />

                { this.props.isRegisteredUser == null &&
                    <View>
                        <PrimaryInput label={'Email'} value={this.state.email}
                                      onChangeText={(email) => this.setState({email})} />
                        <FormComponentButton onPress={this._emailAssocWithUser}>Continue</FormComponentButton>
                    </View>
                }

                { this.props.isRegisteredUser == true &&
                    <View>
                        <PrimaryInput label={'Email'} value={this.state.email}
                                      onChangeText={(email) => this.setState({email})} />
                        <PrimaryInput label={'Password'} value={this.state.password}
                                      onChangeText={(password) => this.setState({password})} />
                        <FormComponentButton onPress={this._signInAsync}>Sign In</FormComponentButton>
                    </View>
                }

                { this.props.isRegisteredUser == false &&
                    <View>
                        <PrimaryInput label={'Email'} value={this.state.email}
                                      onChangeText={(email) => this.setState({email})} />
                        <PrimaryInput label={'Forename'} value={this.state.givenName}
                                      onChangeText={(givenName) => this.setState({givenName})} />
                        <PrimaryInput label={'Surname'} value={this.state.familyName}
                                      onChangeText={(familyName) => this.setState({familyName})} />
                        <PrimaryInput label={'Password'} value={this.state.password}
                                      onChangeText={(password) => this.setState({password})} />
                        <FormComponentButton onPress={this._signInAsync}>Register</FormComponentButton>
                    </View>
                }

            </ScrollView>
        </KeyboardAvoidingView>
    );
  }

  _emailAssocWithUser = () => {
      this.props.determine_email_assoc_with_account({'email': this.state.email});
      this.forceUpdate();
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

}

const mapStateToProps = state => ({
    isRegisteredUser: state.auth.isRegisteredUser
});

LogInScreen.propTypes = {
    determine_email_assoc_with_account: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { determine_email_assoc_with_account })(LogInScreen);