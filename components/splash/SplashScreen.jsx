import { View, Text,ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import SplashBtn from './SplashBtn'

const SplashScreen = () => {
  return (
    <View style={tailwind`flex-1 `}>
       <ImageBackground style={tailwind`flex-1 py-14  justify-between`} source={require("../../imgs/pluto2.png")}>
        <View style={tailwind`pt-4  justify-between h-27`}>
          <Text style={[tailwind`text-center font-bold`,{color:"#e7eaed",fontSize:41,fontFamily:"rubix-semi"}]}>
            Pluto
          </Text>
          <Text style={[tailwind`text-center font-light`,{color:"#e7eaed",fontSize:20,fontFamily:"rubix"}]}>
          Find Love Where the Stars Are Aligned
          </Text>
        
        </View>
<View style={tailwind`items-center `}>
  
<SplashBtn/>
<TouchableOpacity>
  <Text style={[tailwind`text-center my-4`,{color:"#e7eaed",fontSize:20,fontFamily:"rubix"}]}>
          Have An Account? Login
          </Text>
</TouchableOpacity>

</View>
</ImageBackground>
    </View>
  )
}

export default SplashScreen