import styled from "styled-components/native"
import Color from "../../styles/colors"
import fonts from "../../styles/fontes"
import { SvgFromUri } from "react-native-svg"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"


export const Container = styled.SafeAreaView `
   
`

export const Card = styled(RectButton)`
  flex:1;
  max-width:50%;
  background-color: ${Color.shape};
  border-radius: 20px;
  align-items:center;
  margin: 5px;
`

export const Texto= styled.Text`
    color: ${Color.green_dark};
    font-family: ${fonts.heading};
    padding: 30px 5px;
    text-align: center;
    font-size: 18px;
`

export const Wrapper= styled.View`
`

export const Plant = styled.View`
    
` 
export const PlantImg = styled(SvgFromUri)`
  margin-top: 30px;

`

