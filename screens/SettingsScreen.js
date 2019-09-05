import React from 'react';
import {View, Text, AsyncStorage, ScrollView, FlatList} from 'react-native';
import {FormComponentButton} from "../custom_components/registration_screen/FormComponentButton";
import {StatusBar} from "../custom_components/StatusBar";
import {HeaderComponent} from "../custom_components/HeaderComponent";

class SettingsScreen extends React.Component {
  static navigationOptions = {header: null};

  render() {
    return (
        <View style={{flex:1}}>
            <StatusBar/>
            <ScrollView style={{backgroundColor: '#F5F5F5', paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15}}>
                <HeaderComponent pageName={'About'} />
                <FormComponentButton onPress={this._signOutAsync}>Sign Out</FormComponentButton>
            </ScrollView>
        </View>
    );
  }

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

}

export default SettingsScreen;