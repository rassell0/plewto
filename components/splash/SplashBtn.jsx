import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import tailwind from 'twrnc'


const SplashBtn = ({onPress,name}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[tailwind`items-center rounded-xl w-9/10 p-3.5`,{backgroundColor:"#bac4c8"}]}>
      <Text style={[tailwind`font-bold`,{fontSize:21}]}>{name}</Text>
    </TouchableOpacity>
  )
}

export default SplashBtn