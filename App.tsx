import React from "react";
import Routes from "./src/Routes";
import AppLoading from "expo-app-loading"
import {
  useFonts, Itim_400Regular
} from '@expo-google-fonts/itim';
import {
  DancingScript_600SemiBold, DancingScript_400Regular, DancingScript_500Medium, DancingScript_700Bold 
} from '@expo-google-fonts/dancing-script';
import { Lobster_400Regular } from '@expo-google-fonts/lobster';


export default function App(){

 
  const [ fontsLoaded ] = useFonts ({
    Itim_400Regular,
    DancingScript_600SemiBold, 
    DancingScript_400Regular, 
    DancingScript_500Medium, 
    DancingScript_700Bold,
    Lobster_400Regular
  });

  if(!fontsLoaded)
    return <AppLoading/> 

  return(
      <Routes/>
  )
}


