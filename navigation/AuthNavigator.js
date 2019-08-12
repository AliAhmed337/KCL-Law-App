import { createStackNavigator } from 'react-navigation';
import LogInScreen from '../screens/LogInScreen';

const AuthStack = createStackNavigator({
    Login: LogInScreen
});

export default AuthStack;
