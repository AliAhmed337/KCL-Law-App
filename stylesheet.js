'use strict';

import {StyleSheet} from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#fff",
        alignItems: 'center',
    },
    statusBar: {
        backgroundColor: "#C2185B",
        height: Constants.statusBarHeight,
    },
    signInContainer: {
        flex: 0,
        padding: 20
    },
    welcomeShield: {
        height:65,
        width: 65,
        resizeMode: 'contain',
        marginBottom: 10
    },
    letsGetStarted: {
        fontSize: 32,
        marginBottom: 10,
        fontWeight: 600
    },
    welcomeText: {
        fontSize: 17,
        fontWeight: 500
    },
    formComponent: {
        marginTop: 30
    },
    formComponentHeader: {
        fontSize: 15,
        fontWeight: 500,
        marginBottom: 5
    },
    formComponentInput: {
        height: 30,
        borderColor: '#757575',
        borderWidth: 0,
        borderBottomWidth: 2
    },
});

module.exports = styles;