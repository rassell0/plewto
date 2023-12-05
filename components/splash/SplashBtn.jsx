import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import tailwind from 'twrnc'


const SplashBtn = () => {
  return (
    <TouchableOpacity style={[tailwind`items-center rounded-xl w-9/10 p-3.5`,{backgroundColor:"#bac4c8"}]}>
      <Text style={[tailwind`font-bold`,{fontSize:21,fontFamily:"rubix-bold"}]}>Register Now</Text>
    </TouchableOpacity>
  )
}

export default SplashBtn