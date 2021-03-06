import styled from "styled-components/native"
import Color from "../../styles/colors"
import fonts from "../../styles/fontes"

export const Container = styled.SafeAreaView `
    flex:1;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`


export const Wrapper= styled.View`
    flex: 1;
    width: 100%;
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

export const Logo= styled.Image.attrs({
    resizeMode: 'cover',
})`
    height: 150px;
    width: 150px;
    justify-content: center;
    align-items:center;
    
`

export const Touch = styled.TouchableWithoutFeedback`


`

export const KeyBoard = styled.KeyboardAvoidingView`
    flex:1;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`

export const Formulario= styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
`

export const Emoji= styled.Text`
    font-size: 54px;
`

export const Texto= styled.Text`
    font-size: 26px;
    line-height: 32px;
    text-align: center;
    color: ${Color.heading};
    font-family: ${fonts.heading};
    margin-top: 20px;
`

export const Input = styled.TextInput`
      border-bottom-width: 1;
      border-color: ${({focus}) => focus ? Color.green : Color.gray};
      color: ${Color.heading};
      width: 100%;
      font-size: 18px; 
      margin-top: 50px;
      padding: 10px;
      text-align: center;
`
export const Footer = styled.View`
    margin: 60px 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 56px; 

`