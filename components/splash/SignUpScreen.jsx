import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'

const SignUpScreen = ({}) => {
  return (
    <View style={tailwind`flex-1`}>
     <ImageBackground style={tailwind`flex-1 py-14  justify-between`} source={require("../../imgs/pluto2.png")}>

     </ImageBackground>
    </View>
  )
}

export default SignUpScreen