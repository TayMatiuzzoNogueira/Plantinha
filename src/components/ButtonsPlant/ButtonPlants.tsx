import React from "react"
import {Texto, Container } from "./style"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen"



interface EnviromentButtonProps extends RectButtonProps{
    title: string;
    active? : boolean; 
}

export function EnviromentButton ({
    title,
    active = false,
    ...rest    
} :EnviromentButtonProps){
    return(
        <Container active={active}
            {...rest}
        >
            <Texto active={active}>{title}</Texto>
        </Container>
    )
}