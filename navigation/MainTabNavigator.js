import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import NewsFeedScreen from '../screens/NewsFeedScreen';
import EventsScreen from '../screens/EventsScreen';
import FirmsScreen from '../screens/FirmsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {
    FontAwesome,
    MaterialIcons,
    MaterialCommunityIcons
} from '@expo/vector-icons';

const NewsFeedStackNavigator = createStackNavigator({
    Home: NewsFeedScreen
});

NewsFeedStackNavigator.navigationOptions = {
  header: null,
  tabBarOptions:  {
        activeTintColor: 'red',
        inactiveTintColor: 'green', //CHANGE ALL INACTIVE COLOURS TO SAME COLOUR PLS
        showIcon: true
  },
  tabBarIcon: ({ tintColor })  => (
    <MaterialCommunityIcons
                name="newspaper"
                size={25}
                color={tintColor}
            />
 )
};

const EventsStackNavigator = createStackNavigator({
    Home: EventsScreen
});

EventsStackNavigator.navigationOptions = {
  header: null,
  tabBarOptions:  {
        activeTintColor: 'orange',
        inactiveTintColor: 'green', //CHANGE ALL INACTIVE COLOURS TO SAME COLOUR PLS
        showIcon: true
  },
  tabBarIcon: ({ tintColor })  => (
    <MaterialIcons
                name="event"
                size={25}
                color={tintColor}
            /> )
};

const FirmsStackNavigator = createStackNavigator({
    Home: FirmsScreen
});

FirmsStackNavigator.navigationOptions = {
  header: null,
  tabBarOptions:  {
        activeTintColor: 'pink',
        inactiveTintColor: 'green', //CHANGE ALL INACTIVE COLOURS TO SAME COLOUR PLS
        showIcon: true
  },
  tabBarIcon: ({ tintColor })  => (
    <MaterialIcons
                name="gavel"
                size={25}
                color={tintColor}
            /> )
};

const SettingsStackNavigator = createStackNavigator({
    Home: SettingsScreen
});

SettingsStackNavigator.navigationOptions = {
  header: null,
  tabBarOptions:  {
        activeTintColor: 'blue', 
        inactiveTintColor: 'green', //CHANGE ALL INACTIVE COLOURS TO SAME COLOUR PLS
        showIcon: true
  },
  tabBarIcon: ({ tintColor })  => (
    <MaterialIcons
                name="settings"
                size={25}
                color={tintColor}
            /> )
};

const MainAppTabNavigator = createBottomTabNavigator({
    News: NewsFeedStackNavigator,
    Events: EventsStackNavigator,
    Firms: FirmsStackNavigator,
    Settings: SettingsStackNavigator
});

export default MainAppTabNavigator;
