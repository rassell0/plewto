import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tailwind from 'twrnc'
import SplashBtn from './SplashBtn'
import { Ionicons} from "@expo/vector-icons"
const SignUpModal = ({closeModal}) => {

const [nameInput,setNameInput] = useState("")
const [emailInput,setEmailInput] = useState("")
const [passwordInput,setPasswordInput] = useState("")


const updateName = (value) =>{
setNameInput(value)
console.log(value)
}
const updateEmail = (value) =>{
setEmailInput(value)
console.log(value)
}
const updatePassword = (value) =>{
setPasswordInput(value)
console.log(value)
}

  return (
    <Modal animationType='slide' >
        <View style={[tailwind`flex-1 px-4 py-24`,{backgroundColor:"#06032a"}]}>
            <View style={tailwind`flex-row justify-between items-center `}>
               <Text style={[tailwind`text-white font-bold text-3xl`,{color:"#bac4c8"}]}>Sign Up</Text> 
               <TouchableOpacity onPress={closeModal} style={tailwind``}>
<Ionicons name='close' color={"#bac4c8"} size={40}/>
               </TouchableOpacity>
            </View>

<TextInput placeholder='Name' onChangeText={updateName} placeholderTextColor={"#9a9b9e"} autoFocus style={[tailwind`border-b my-4 border-gray-300 h-10 text-xl font-semibold`,{color:"#e4e4e4"}]}/>
<TextInput placeholder='Email' onChangeText={updateEmail} keyboardType="email-address" placeholderTextColor={"#9a9b9e"} style={[tailwind`border-b my-4 border-gray-300 h-10 text-xl font-semibold`,{color:"#e4e4e4"}]}/>
<TextInput placeholder='Password' onChangeText={updatePassword} secureTextEntry placeholderTextColor={"#9a9b9e"} style={[tailwind`border-b my-4 border-gray-300 h-10 text-xl font-semibold`,{color:"#e4e4e4"}]}/>
<View style={tailwind`items-center mt-6`}>
    <SplashBtn name={"Sign Up"}/>
</View>

        </View>
    </Modal>
  )
}

export default SignUpModal