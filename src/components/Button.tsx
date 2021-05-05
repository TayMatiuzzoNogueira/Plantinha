import React from "react"
import { TouchableOpacityProps} from "react-native"
import { Botao, Paragrafo, Wrapper } from "./style"
import { Entypo } from '@expo/vector-icons';

interface ButtonProps extends TouchableOpacityProps{
    title: string;
    children?: JSX.Element | JSX.Element[];
}

export function Button({ title, children, ...rest }:ButtonProps){
    return(
        <Botao activeOpacity={0.7} {...rest}>
        <Paragrafo>
                {title}
                {children}
        </Paragrafo>
        </Botao>
    )
}


