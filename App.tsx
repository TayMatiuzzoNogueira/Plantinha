import React from "react";
import { Welcome } from "./src/pages/Welcome/welcome";
import AppLoading from "expo-app-loading"
import {
  useFonts, Itim_400Regular
} from '@expo-google-fonts/itim';
import { UserIdentification } from "./src/pages/UserIdentification/userIdentification";

export default function App(){

 
  const [ fontsLoaded ] = useFonts ({
    Itim_400Regular
  });

  if(!fontsLoaded)
    return <AppLoading/> 

  return(
      <UserIdentification/>
  )
}


