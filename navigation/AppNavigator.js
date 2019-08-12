import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

export default createAppContainer(
    createSwitchNavigator(
        {
            App: MainTabNavigator,
            Auth: AuthNavigator,
            AuthLoading: AuthLoadingScreen
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
);