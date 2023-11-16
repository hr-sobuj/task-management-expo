import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack=createStackNavigator();

const MainRouter = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='splash' component={SplashScreen} options={{ headerShown:false }}/>
        <Stack.Screen name='home' component={HomeScreen}/>
    </Stack.Navigator>
  )
}

export default MainRouter