import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import tailwind from 'twrnc';
import SplashScreen from './components/splash/SplashScreen';
import {useFonts} from "expo-font"

import * as ProlongSplashScreen from 'expo-splash-screen';
import RootSplash from './components/splash/RootSplash';
export default function App() {
 
 
 const [fontsLoaded] =  useFonts({
    "rubix":require("./assets/fonts/Rubik-VariableFont_wght.ttf"),
    "rubix-bold":require("./assets/fonts/Rubik-Bold.ttf"),
    "rubix-semi":require("./assets/fonts/Rubik-SemiBold.ttf")
  })

  if(!fontsLoaded){
 ProlongSplashScreen.preventAutoHideAsync();
  }else{
    ProlongSplashScreen.hideAsync()
  }

  return (
    <View style={tailwind`flex-1`}>
 <RootSplash/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
   
  },
});
