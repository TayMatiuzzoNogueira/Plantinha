import React from "react"
import { Container, Texto, Wrapper, Title, Div, List } from "./style"
import { Header } from "../../components/Header/header"
import { EnviromentButton } from "../../components/ButtonsPlant/ButtonPlants"


export function PlantSelect(){
    return(
        <Container>
            <Div>
            <Header/>

                <Title>
                    Em qual ambiente
                </Title>

                <Texto>
                    você quer colocar sua planta?
                </Texto>
            </Div>

            <Wrapper>
                <List data={ [1, 2, 3, 4, 5 ]} renderItem={( item )=>(
                    <EnviromentButton title= "Flor " active/> 
                )} horizontal>
                    
                </List>
            </Wrapper>
        </Container>
    )
}