import React, useState from "react"
import { Container, Texto, SubTexto, Botao, Paragrafo } from "./style"
import { SafeAreaView, Text, Image, StyleSheet, TouchableOpacity } from "react-native"
import waterringImg from '../img/watering.png'
// import {Button} from "../components/Button"


export function Welcome(){

    const [visible, setVisible] = useState(false);
    function handleVisibility(){
        setVisible(true);
    }

    return(
        <Container>
            <Texto>Gerencie suas plantas de forma fácil!</Texto>
            <Image source= {waterringImg}/>

            <SubTexto>Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar
            </SubTexto> 


            <Botao activeOpacity={0.7} onpress={handleVisibility}>
                <Paragrafo>
                    Avançar 
                </Paragrafo>
            </Botao>

            {/* <Button title="Mostrar" onpress={handleVisibility}/>                */}
            {/* <Button title="Ocultar"/>                */}
        </Container>
    )
}

// const style = StyleSheet.create({
//     style:{
//         flex:1,
//         justifyContent:"space-between",
//         alignItems: "center",
//         color: colors.red,
//     }
// })


