import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export function NewsFeedGradient(props) {
    return (
        <LinearGradient colors={['#fbfbfb', '#fff']}>{props.children}</LinearGradient>
    );
}
