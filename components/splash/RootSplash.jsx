import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./SplashScreen"
import SignUpScreen from './SignUpScreen';
import SignUpModal from './SignUpModal';
const RootSplash = () => {
const Stack = createNativeStackNavigator()
  return (
<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen options={{
    headerShown:false
  }} name='splash' component={SplashScreen}/>
  <Stack.Screen name='signup' component={SignUpModal}/>
</Stack.Navigator>
</NavigationContainer>
  )
}

export default RootSplash