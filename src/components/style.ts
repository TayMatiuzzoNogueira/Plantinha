import styled from "styled-components/native"
import Color from "../../styles/colors"

export const Botao = styled.TouchableOpacity`
    background-color: #66CDAA;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    padding: 10px 20px;
    height:56px;
    width: 75%;
`

export const Wrapper= styled.View`
    width: 100%;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`

export const Paragrafo = styled.Text`
    font-size: 22px;
    font-weight: 600;
    color: ${Color.white};
`