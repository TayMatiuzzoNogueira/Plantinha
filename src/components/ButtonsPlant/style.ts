import styled from "styled-components/native"
import Color from "../../styles/colors"
import fonts from "../../styles/fontes"
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import { Colors } from "react-native/Libraries/NewAppScreen"



export const Container = styled(RectButton)`
    background-color: ${({active}) => active ? Color.green_light : Color.shape};
    height: 50px;
    width: 100px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
`

export const Texto= styled.Text`
    font-size: 22px;
    color: ${({active}) => active ? Color.green_dark : Color.heading};
    font-family: ${fonts.text};
`
