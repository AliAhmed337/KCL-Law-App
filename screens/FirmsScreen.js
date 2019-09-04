import React from 'react';
import {View, Button, Text, AsyncStorage} from 'react-native';
import {StatusBar} from "../custom_components/StatusBar";
import {HeaderComponent} from "../custom_components/HeaderComponent";

class FirmsScreen extends React.Component {
    static navigationOptions = {header: null};

    render() {
        return (
            <View style={{flex:1, backgroundColor: '#fbfbfb'}}>
                <StatusBar/>
                <View style={{backgroundColor: '#fbfbfb', paddingTop: 20, paddingBottom: 20, paddingLeft: 15, paddingRight: 15}}>
                    <HeaderComponent pageName={'Law Firms'} />
                </View>
            </View>
    );
  }

}

export default FirmsScreen;