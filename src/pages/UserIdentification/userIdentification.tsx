import React, { useState } from "react";
import { Container, Background, Wrapper, Logo, Formulario, Emoji, Texto, Input, Footer} from "./style"
import {Button} from "../../components/Button"

const image = { URL: "" };


export function UserIdentification(){

    const [isFocused, setIsFocused] = useState(false);

    function handleInputBlur(){
        setIsFocused(false);
    }

    function handleInputFocus(){
        setIsFocused(true);
    }
   

    

    return(
        <Background source={require('../../img/flor3.png')}>
            <Container>
                {/* <KeyBoard> */}
                    <Wrapper>
                        <Formulario>
                            <Logo source={require('../../img/tulipas.png')}/>
                            <Texto>Como podemos {'\n'} chamar você?</Texto>
                            <Input placeholder="Seu Nome" onBlur={handleInputBlur} onFocus={handleInputFocus}/>
                            {/* isFocused && {borderColor: colors.green} */}

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

