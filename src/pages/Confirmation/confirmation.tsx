import React from "react"
import {Container, Wrapper, Logo, Background, Footer, Title, SubTexto } from "./style"
import { Button } from "../../components/Button/button"
import { useNavigation } from "@react-navigation/core";

const background = { URL: require('../../img/flor3.png') };
const image = { URL: require('../../img/cesta-de-flores.png') };

export function Confirmation(){

    const navigation = useNavigation();
   
    function handleMoveOn(){
        navigation.navigate('PlantSelect')
    }

    return(
        <Background source={background.URL}>
            <Container>
                <Wrapper>
                    <Logo source={image.URL}/>
                    <Title>Prontinho!</Title>
                    <SubTexto> Agora vamos começar a cuidar das suas plantinhas com muito cuidado! </SubTexto>
                
                    <Footer>
                        <Button title="Começar" onPress={handleMoveOn}></Button>
                    </Footer>
                
                </Wrapper>
            </Container>
        </Background>
    )
}

