import React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from "expo-constants";

const s = StyleSheet.create({
    statusBar: {
        backgroundColor: "#EEEEEE",
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
        height: Constants.statusBarHeight + 1,
    }
});

export function StatusBar(props) {
    return (
        <View style={s.statusBar} />
    );
}