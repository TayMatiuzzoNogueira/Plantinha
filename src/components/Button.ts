import React from "react"
import { TouchableOpacityProps} from "react-native"
import { Botao, Paragrafo } from "./style"


interface ButtonProps extends TouchableOpacityProps{
    title: string;
}

export function Button({ title, ...rest }:ButtonProps){
    return(
       <Botao activeOpacity={0.7} {...rest}>
            <Paragrafo>
                { title } 
            </Paragrafo>
        </Botao>
    )
}


