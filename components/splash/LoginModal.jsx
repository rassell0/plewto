import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import SplashBtn from './SplashBtn'
import { Ionicons} from "@expo/vector-icons"
const LogInModal = ({closeModal}) => {
  return (
    <Modal animationType='slide' >
        <View style={[tailwind`flex-1 px-4 py-24`,{backgroundColor:"#06032a"}]}>
            <View style={tailwind`flex-row justify-between items-center `}>
               <Text style={[tailwind`text-white font-bold text-3xl`,{color:"#bac4c8"}]}>Log In</Text> 
               <TouchableOpacity onPress={closeModal} style={tailwind``}>
<Ionicons name='close' color={"#bac4c8"} size={40}/>
               </TouchableOpacity>
            </View>


<TextInput placeholder='Email' placeholderTextColor={"#9a9b9e"} autoFocus style={[tailwind`border-b mt-8 mb-4 border-gray-300 h-10 text-xl font-semibold`,{color:"#e4e4e4"}]}/>
<TextInput placeholder='Password' placeholderTextColor={"#9a9b9e"} style={[tailwind`border-b my-4 border-gray-300 h-10 text-xl font-semibold`,{color:"#e4e4e4"}]}/>
<View style={tailwind`items-center mt-6`}>
    <SplashBtn name={"Log In"}/>
</View>

        </View>
    </Modal>
  )
}

export default LogInModal