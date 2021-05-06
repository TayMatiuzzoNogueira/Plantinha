import styled from "styled-components/native"
import Color from "../../styles/colors"
import fonts from "../../styles/fontes"
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import { Entypo } from '@expo/vector-icons';



export const Container = styled.SafeAreaView `
    flex:1;
    justify-content: space-around;
    align-items: center;
    /* background-color: #feffeb; */
`
export const Wrapper= styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
`

export const Texto = styled.Text`
    font-size: 39px;
    text-align: center;
    color: #52655A; 
    margin-top: 38px;
    font-family: ${fonts.heading};
    line-height: 40px;
`

export const SubTexto = styled.Text`
    text-align: center;
    font-size: 18px;
    padding: 0 25px;
    color:#52655A;
    font-family: ${fonts.text};
    line-height: 28px;
`
// export const Logo= styled.ImageBackground`
//     height: 20%;
//     width: 52%;
//     justify-content: center;
//     align-items:center;
    
// `

export const Imagem = styled.Image` 
    height: ${width*0.7};
`
export const Icon = styled(Entypo)`
    font-size: 34px;
    color: ${Color.white};
`