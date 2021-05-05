import React, { useState } from "react";
import { Container, Background, Wrapper, Logo, Formulario, Emoji, Texto, Input, Footer} from "./style"
import {Button} from "../../components/Button"

const image = { URL: "" };


export function UserIdentification(){

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();


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
    

    return(
        <Background source={require('../../img/flor3.png')}>
            <Container>
                {/* <KeyBoard> */}
                    <Wrapper>
                        <Formulario>
                            <Logo source={require('../../img/tulipas.png')}/>
                            <Texto>Como podemos {'\n'} chamar você?</Texto>
                            <Input placeholder="Seu Nome" onchangeText={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus}/>
                            {/* (isFocused || isFilled) && {borderColor: colors.green} */}

                            <Footer>
                                <Button title="Avançar"></Button>
                            </Footer>

                        </Formulario>
                    </Wrapper>
                {/* </KeyBoard> */}
            </Container>
        </Background>
    )
}

