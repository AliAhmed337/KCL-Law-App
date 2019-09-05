import React from 'react';
import {View, Button, Text, AsyncStorage, ScrollView, StyleSheet, Image} from 'react-native';
import {StatusBar} from "../custom_components/StatusBar";
import {HeaderComponent} from "../custom_components/HeaderComponent";
console.log("b");
import {FirmBar} from "../custom_components/feed_components/FirmBar";

console.log("a");
class FirmsScreen extends React.Component {
    static navigationOptions = {header: null};

    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar/>
                <ScrollView style={{backgroundColor: '#F5F5F5', flex: 1}}>
                    <View style={{paddingTop: 20, paddingBottom: 0, paddingLeft: 15, paddingRight: 15}}>
                        <HeaderComponent pageName={'About'} />
                    </View>

                    <FirmBar />
                    <FirmBar />
                    <FirmBar />
                    <FirmBar />
                    <FirmBar />
                    <FirmBar />
                    <FirmBar />
                    <FirmBar />
                    <FirmBar />

                </ScrollView>
            </View>
        );
    }

}

export default FirmsScreen;