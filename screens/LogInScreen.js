import React from 'react';
import {Text,View,Button, AsyncStorage} from 'react-native';

class LogInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign  lol',
  };

  render() {
    return (
        <View>
          <Button title="Sign in!" onPress={this._signInAsync} />
        </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

export default LogInScreen;