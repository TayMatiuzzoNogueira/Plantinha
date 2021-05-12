import React from "react";
import { Container, Wrapper, Animation } from "./style";
import LottieView from "lottie-react-native";

import loadAnimation from "../../img/loadPlant.json";

export function Load(){
    return(
        <Container>
            <Animation source={loadAnimation}
            autoPlay
            loop/>
        </Container>
    )
}