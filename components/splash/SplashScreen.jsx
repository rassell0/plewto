import { View, Text,ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tailwind from 'twrnc'
import SplashBtn from './SplashBtn'
import SignUpModal from './SignUpModal'
import LogInModal from './LoginModal'

const SplashScreen = ({navigation}) => {
  const [signUpModal,setSignUpModal] = useState(false)
  const [loginModal,setLoginModal] = useState(false)


const toggleSignUpModal = () =>{
  setSignUpModal(state => !state)
}
const toggleLogInModal = () =>{
  setLoginModal(state => !state)
}

  return (
    <View style={tailwind`flex-1 `}>
{signUpModal && <SignUpModal closeModal={toggleSignUpModal}/>}
{loginModal && <LogInModal closeModal={toggleLogInModal}/>}
       <ImageBackground style={tailwind`flex-1 py-14  justify-between`} source={require("../../imgs/pluto2.png")}>
        <View style={tailwind`pt-4  justify-between h-27`}>
          <Text style={[tailwind`text-center font-bold`,{color:"#e7eaed",fontSize:41}]}>
            Pluto
          </Text>
          <Text style={[tailwind`text-center font-light`,{color:"#e7eaed",fontSize:20}]}>
          Find Love Where The Stars Are Aligned
          </Text>
        
        </View>
<View style={tailwind`items-center `}>
  
<SplashBtn name={"Register Now"} onPress={toggleSignUpModal}/>
<TouchableOpacity onPress={setLoginModal}>
  <Text style={[tailwind`text-center my-4`,{color:"#e7eaed",fontSize:20}]}>
          Have An Account? Login
          </Text>
</TouchableOpacity>

</View>
</ImageBackground>
    </View>
  )
}

export default SplashScreen