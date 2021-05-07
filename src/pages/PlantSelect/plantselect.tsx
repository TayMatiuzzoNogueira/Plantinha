import React, { useEffect, useState }from "react"
import { Container, Texto, Wrapper, Title, Plant, Div, List, ListPlant } from "./style"
import { Header } from "../../components/Header/header"
import { EnviromentButton } from "../../components/ButtonsPlant/ButtonPlants"
import api from "../../services/api"
import { PlantCardPrimary } from "../../components/PlantCardPrimary/plantCardPrimary"




interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string;
    }
}


interface EnviromentProps {
    key: string;
    title: string;
}




export function PlantSelect(){
    
    const [environments, setEnvironments] = useState<EnviromentProps[]>();
    const [plants, setPlants] = useState<PlantProps[]>();


    useEffect(() => {
        async function fecthEnvironment() {
            const { data } = await api.get('plants_environments');
            setEnvironments([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data
            ]);
        }

        fecthEnvironment();
    }, [])


    useEffect(() => {
        async function fecthPlants() {
            const { data } = await api.get('plants');
            setPlants(data);
        }

        fecthPlants();
    }, [])

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
                <List data={ environments } renderItem={( {item} )=>(
                    <EnviromentButton title= {item.title}/> 
                )} horizontal showsHorizontalScrollIndicator={false}/>
                    
            </Wrapper>

            <Plant>
                    <ListPlant data={plants} renderItem = {({item}) => (
                        <PlantCardPrimary data={item}/>
                    )}  showsVerticalScrollIndicator={false}
                        numColumns={2}/>
            </Plant>

        </Container>
    ) 
}