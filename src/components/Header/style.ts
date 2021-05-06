import styled from "styled-components/native"
import Color from "../../styles/colors"
import fonts from "../../styles/fontes"
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export const Container = styled.SafeAreaView `
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-top: ${getStatusBarHeight()};
`
export const Texto= styled.Text`
    font-size: 32px;
    color: ${Color.heading};
    font-family: ${fonts.text};
`

export const Name= styled.Text`
    font-size: 45px;
    color: ${Color.heading};
    font-family: ${fonts.nameUser};
    line-height: 50px;
`

export const Wrapper= styled.View`
`

export const Div = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
` 

export const Background= styled.ImageBackground`
    flex: 1;
    width: 100%;
`


export const Perfil= styled.Image.attrs({
    resizeMode: 'cover',
})`
    margin-top: 20px;
    height: 80px;
    width: 80px;
    border-radius:40px;
    justify-content: center;
    align-items:center;
    
`