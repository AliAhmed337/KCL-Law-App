import React from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {FormComponentButton} from "../custom_components/registration_screen/FormComponentButton";

class SettingsScreen extends React.Component {
  static navigationOptions = { title: 'Settings'};

  render() {
    return (
        <View>
            <Text>Settings page</Text>
            <FormComponentButton onPress={this._signOutAsync}>Sign Out</FormComponentButton>
        </View>
    );
  }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

}

export default SettingsScreen;