import styled from "styled-components/native"
import Color from "../colors"


export const Container = styled.SafeAreaView `
    flex:1;
    justify-content: space-between;
    align-items: center;
`

export const Texto = styled.Text`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: #52655A;
    margin-top: 38px;
`

export const SubTexto = styled.Text`
    text-align: center;
    font-size: 18px;
    padding: 0 25px;
    color:#52655A;
`

export const Botao = styled.TouchableOpacity`
    background-color: #32B768;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    padding: 10px 20px;
    height:56px;
    width: 50%;
`

export const Paragrafo = styled.Text`
    font-size: 22px;
    font-weight: 600;
    color: ${Color.white};
`