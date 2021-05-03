import React from "react"
import styled from "styled-components/native"
import { SafeAreaView, Text, Image, StyleSheet } from "react-native"

import waterringImg from '../img/waterdrop.png'
export function Welcome(){
    return(
        <Container>
            <Text>Gerencie suas plantas de forma fácil!</Text>
            <Image source= {waterringImg}/>

        </Container>
    )
}

// const style = StyleSheet.create({
//     container:{
//         flex:1,
//         justifyContent:"center",
//         alignItems: "center",
//     }
// })

const Container = styled.SafeAreaView `
    flex:1;
    justify-content: center;
    align-items: center;
`