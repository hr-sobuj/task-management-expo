import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './LoginScreen';
import Registration from './Registration';

const Tab=createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='login' component={LoginScreen} options={{ headerShown:false }}/>
        <Tab.Screen name='registration' component={Registration}/>
    </Tab.Navigator>
  )
}

export default HomeScreen;