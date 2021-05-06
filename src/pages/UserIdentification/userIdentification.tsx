import React, { useState } from "react";
import { Container, Touch, Background, Wrapper, KeyBoard, Logo, Formulario, Emoji, Div, Texto, Input, Footer} from "./style"
import {Button} from "../../components/Button/button"
import { Platform, Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/core";

const background = { URL: require('../../img/flor3.png') };
const image = { URL: require('../../img/tulipas.png') };


export function UserIdentification(){

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();
    const navigation = useNavigation();

    function handleInputBlur(){
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus(){
        setIsFocused(true);
    }
   
    function handleInputChange(value: string){
        setIsFilled(!!value);
        setName(value);
    }



    function handleSubmit(){
        navigation.navigate('Confirmation');
    }
    

    return(
        <Background source={background.URL}>
            <Container>
                <KeyBoard   behavior='padding'
                            keyboardVerticalOffset={
                            Platform.select({
                                ios: () => -100,
                                android: () => 200
                            })()}>
                    <Touch onPress={Keyboard.dismiss}>
                        <Wrapper>
                            <Formulario>
                                <Div>
                                    <Logo source={image.URL}/>
                                    <Texto>Como podemos {'\n'} chamar você?</Texto>
                                </Div>
                                <Input focus={ (isFocused || isFilled) } placeholder="Seu Nome" onChangeText={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus}/>
                                {/* (isFocused || isFilled) && {borderColor: colors.green} */}

                                <Footer>
                                    <Button title="Confirmar" onPress={handleSubmit}></Button>
                                </Footer>

                            </Formulario>
                        </Wrapper>
                    </Touch>
                </KeyBoard>
            </Container>
        </Background>
    )
}

