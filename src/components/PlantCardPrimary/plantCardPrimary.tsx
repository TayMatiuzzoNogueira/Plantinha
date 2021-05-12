import React from "react"
import { Container, Texto, Wrapper, Card, PlantImg } from "./style"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"



interface PlantProps extends RectButtonProps{
    data:{
        name: string;
        photo: string;
    }
}

export const PlantCardPrimary = ({data, ...rest} : PlantProps) => {
    return(
        <Card {...rest}>
            <PlantImg uri={data.photo} width={70} height={70}/>
            <Texto> { data.name } </Texto>
        </Card>
    )
}