import React from "react"
import { Container, Background, Texto, Wrapper, Name, Perfil, Div } from "./style"


const UserIgm = { URL: require('../../img/perfil.jpeg') };
export function Header(){
    return(
        <Div>
            <Container>
                <Wrapper>
                    <Texto>Olá,</Texto>
                    <Name>Tay</Name>
                </Wrapper>

                <Perfil source={UserIgm.URL}/>
            </Container>
        </Div>
    )
}