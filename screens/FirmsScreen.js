import React from 'react';
import {View, Button, Text, AsyncStorage, ScrollView} from 'react-native';
import {StatusBar} from "../custom_components/StatusBar";
import {HeaderComponent} from "../custom_components/HeaderComponent";

class FirmsScreen extends React.Component {
    static navigationOptions = {header: null};

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar/>
                <ScrollView style={{backgroundColor: '#F5F5F5', paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15}}>
                    <HeaderComponent pageName={'About'} />
                </ScrollView>
            </View>
        );
    }

}

export default FirmsScreen;