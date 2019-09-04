import React from 'react';
import {View, StyleSheet} from 'react-native';

const s = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15
    },
});

export function NewsFeedCard(props) {
    return (
        <View style={s.card}>{props.children}</View>
    );
}
