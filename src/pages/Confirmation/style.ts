import styled from "styled-components/native"
import Fonts from "../../styles/fontes"


export const Container = styled.SafeAreaView `
    flex:1;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`


export const Wrapper= styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items:center;
`

export const Background= styled.ImageBackground`
    flex: 1;
    width: 100%;

`

export const Title = styled.Text`
    font-size: 32px;
    text-align: center;
    color: #52655A; 
    margin-top: 15px;
    font-family: ${Fonts.heading};
    line-height: 38px;
`

export const SubTexto = styled.Text`
    font-size: 22px;
    text-align: center;
    color: #52655A; 
    padding: 45px 35px 0 35px;
    font-family: ${Fonts.text};
    line-height: 38px;
`

export const Logo= styled.Image.attrs({
    resizeMode: 'cover',
})`
    height: 150px;
    width: 150px;
    justify-content: center;
    align-items:center;
    text-align:center;
`
export const Footer = styled.View`
    margin: 60px 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 56px; 
    padding: 0 50px;
`