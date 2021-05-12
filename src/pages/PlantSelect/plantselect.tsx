import React, { useEffect, useState }from "react"
import { Container, PageLoading, Texto, Wrapper, Title, Plant, Div, List, ListPlant } from "./style"
import { Header } from "../../components/Header/header"
import { EnviromentButton } from "../../components/ButtonsPlant/ButtonPlants"
import api from "../../services/api"
import { PlantCardPrimary } from "../../components/PlantCardPrimary/plantCardPrimary"
import { Load } from "../../components/Load/load";



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
    const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>();
    const [environmentsSelected, setEnvironmentsSelected] = useState('all');
    const [loading, setLoading] = useState(true);


    const [page, setPage] = useState(1);
    const [loadingMore, setLoadingMore] = useState(false);

    const [loadedAll, setLoadedAll] = useState(false);


    function handleEnvironmentsSelected(environment : string){
        setEnvironmentsSelected(environment);

        if(environment == 'all')
        return setFilteredPlants(plants);


        const filtered = plants.filter(plant =>
            plant.environments.includes(environment));

            setFilteredPlants(filtered);
    }


    async function fecthPlants() {
        const { data } = await api.get(`plants?_sort=name&order=asc&_page=${page}&_limit=8`);
        
        if(!data) return setLoading(true);

        if(page > 1){
            setPlants(oldValue => [...oldValue, ...data])
            setFilteredPlants(oldValue => [...oldValue, ...data])
        }else{
        setPlants(data);
        setFilteredPlants(data);
    }
 
        setLoading(false);
        setLoadingMore(false);
    }



    function handleFetchMore(distance: number){
        if(distance < 1)
        return;

        setLoadingMore(true);
        setPage(oldValue => oldValue + 1);
        fecthPlants();
    }


    useEffect(() => {
        async function fecthEnvironment() {
            const { data } = await api
            .get('plants_environments?_sort=title&order=asc');
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
        fecthPlants();
    }, [])

    if (loading)
    return <Load/>

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
                    <EnviromentButton title= {item.title}
                    active={item.key === environmentsSelected }
                    onPress={() => handleEnvironmentsSelected(item.key)}/> 
                )} horizontal showsHorizontalScrollIndicator={false}/>
                    
            </Wrapper>

            <Plant>
                    <ListPlant data={filteredPlants} renderItem = {({item}) => (
                        <PlantCardPrimary data={item}/>
                    )}  showsVerticalScrollIndicator={false}
                        numColumns={2}
                        onEndReachedThreshold={0.1}
                        onEndReached={({ distanceFromEnd }) => 
                            handleFetchMore(distanceFromEnd)}
                            ListFooterComponent={
                                loadingMore ?
                                    <PageLoading/>
                                : <></>
                                }/>
            </Plant>


        </Container>
    ) 
}