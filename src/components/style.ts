import styled from "styled-components/native"
import Color from "../colors"

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