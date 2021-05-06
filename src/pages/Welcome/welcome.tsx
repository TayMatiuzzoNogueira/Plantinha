import React, {useState} from "react"
import { Container, Texto, SubTexto, Icon, Wrapper, Imagem } from "./style"
import {Button} from "../../components/Button/button"
import { useNavigation } from "@react-navigation/core"
import { NavigationContainer } from "@react-navigation/native"


export function Welcome(){

    // const [visible, setVisible] = useState(false);
    // function handleVisibility(){
    //     setVisible(true);
    // }

    const navigation = useNavigation();

    function handleSelect(){
        navigation.navigate('UserIdentification');
    }


    return(
        <Container>
            <Wrapper>
                <Texto>Gerencie {'\n'} suas plantas de {'\n'} forma fácil!</Texto>
                <Imagem source={require('../../img/waterPlant.png')} resizeMode="contain"/>
                
                {/* {
                    visible &&
                    <Image source= {waterringImg}/>
                } */}

                <SubTexto>Não esqueça mais de regar suas plantas. 
                    Nós cuidamos de lembrar você sempre que precisar
                </SubTexto> 


                <Button title="" onPress={handleSelect}>
                    <Icon name="chevron-right"/>
                </Button>
                    

                {/* <Button title="Mostrar" onPress={handleVisibility}/>                             */}
            </Wrapper>
        </Container>
    )
}














//const style = StyleSheet.create({
//     style:{
//         flex:1,
//         justifyContent:"space-between",
//         alignItems: "center",
//         color: colors.red,
//     },
//})


