import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import NewsFeedScreen from '../screens/NewsFeedScreen';
import EventsScreen from '../screens/EventsScreen';
import FirmsScreen from '../screens/FirmsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const NewsFeedStackNavigator = createStackNavigator({
    Home: NewsFeedScreen
});

const EventsStackNavigator = createStackNavigator({
    Home: EventsScreen
});

const FirmsStackNavigator = createStackNavigator({
    Home: FirmsScreen
});

const SettingsStackNavigator = createStackNavigator({
    Home: SettingsScreen
});

const MainAppTabNavigator = createBottomTabNavigator({
    News: NewsFeedStackNavigator,
    Events: EventsStackNavigator,
    Firms: FirmsStackNavigator,
    Settings: SettingsStackNavigator
});

export default MainAppTabNavigator;
