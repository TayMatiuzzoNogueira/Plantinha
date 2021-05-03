import React from "react"
import { View, Text, Image } from "react-native"

import waterringImg from '../img/waterdrop.png'
export function Welcome(){
    return(
        <View>
            <Text>Gerencie suas plantas de forma fácil!</Text>
            <Image source= {waterringImg}/>

        </View>
    )
}