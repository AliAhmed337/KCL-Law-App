import React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from "expo-constants";

const s = StyleSheet.create({
    statusBar: {
        backgroundColor: "#C2185B",
        height: Constants.statusBarHeight,
    }
});

export function StatusBar(props) {
    return (
        <View style={s.statusBar} />
    );
}