
import React,{FC} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '../utils/NavigationUtils'
import SplashScreen from '../screens/SplashScreen'
import AuthScreen from '../screens/AuthScreen'
import CallerScreen from '../screens/CallerScreen'
import RegisterScreen from '../screens/RegisterScreen'
import SearchScreen from '../screens/SearchScreen'
import DashboardScreen from '../screens/DashboardScreen'

const  Stack = createNativeStackNavigator()

const Navigation:FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
     <Stack.Navigator initialRouteName='SplashScreen' 
       screenOptions={{
         headerShown: false
       }}
     >
       <Stack.Screen name='SplashScreen' component={SplashScreen} />
       <Stack.Screen name='AuthScreen' component={AuthScreen} />
       <Stack.Screen name='CallerScreen' component={CallerScreen} />
       <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
       <Stack.Screen name='SearchScreen' component={SearchScreen} />
       <Stack.Screen name='DashboardScreen' component={DashboardScreen}/>
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;