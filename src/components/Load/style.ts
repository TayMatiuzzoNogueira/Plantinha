import styled from "styled-components/native"
import Color from "../../styles/colors"
import fonts from "../../styles/fontes"
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import LottieView from "lottie-react-native";


export const Container = styled.SafeAreaView `
   flex: 1;
   justify-content: center;
   align-items: center;
`

export const Wrapper= styled.View`
`
export const Animation = styled(LottieView)` 
    background-color: transparent;
    width: 200px;
    height: 200px;
`