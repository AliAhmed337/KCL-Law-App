import React from 'react';
import {View, Text, AsyncStorage, ScrollView, FlatList} from 'react-native';
import {FormComponentButton} from "../custom_components/registration_screen/FormComponentButton";
import {StatusBar} from "../custom_components/StatusBar";
import {HeaderComponent} from "../custom_components/HeaderComponent";
import {FirmBar} from "../custom_components/feed_components/FirmBar";

class SettingsScreen extends React.Component {
  static navigationOptions = {header: null};

  render() {
    return (
        <View style={{flex:1}}>
            <StatusBar/>
            <ScrollView style={{backgroundColor: '#F5F5F5', paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15}}>
                <HeaderComponent pageName={'About'} />

                <View style={{flexDirection:'column',marginTop:10,marginBottom:10}}>
                    <Text style={{color:'rgb(15, 44, 67)',fontSize:22,marginBottom:5}}>
                        What We Do
                    </Text>
                    <Text style={{}}>
                        The KCLLS is run by students, for students. The Society aims to offer members opportunities to
                        acquaint themselves with the legal profession and equip them with skills necessary to
                        succeed in legal practise through the diverse range of events hosted. Further to this vocational
                        function, KCLLS also hosts multiple social events for members to enjoy.
                    </Text>
                </View>

                <View style={{flexDirection:'column',marginTop:10,marginBottom:10}}>
                    <Text style={{color:'rgb(15, 44, 67)',fontSize:22,marginBottom:5}}>
                        Executive Committee
                    </Text>
                    <View>
                        <FirmBar />
                        <FirmBar />
                        <FirmBar />
                    </View>
                </View>

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