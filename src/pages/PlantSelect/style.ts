import styled from "styled-components/native"
import Color from "../../styles/colors"
import fonts from "../../styles/fontes"

export const Container = styled.View `
    flex:1;
    background-color: #FFFFFF;
`

export const List = styled.FlatList`

`

export const Wrapper= styled.View`

`

export const Div = styled.View`
    padding: 0 30px;
` 

export const Background= styled.ImageBackground`
    flex: 1;
    width: 100%;
`

export const Title= styled.Text`
    font-size: 26px;
    color: ${Color.heading};
    font-family: ${fonts.heading};
    margin-top: 45px;
    line-height: 26px
`

export const Texto= styled.Text`
    font-size: 22px;
    line-height:20px;
    color: ${Color.heading};
    font-family: ${fonts.text};
    margin-top: 14px;
`

