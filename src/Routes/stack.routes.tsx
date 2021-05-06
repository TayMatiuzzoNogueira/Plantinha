import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Welcome } from "../pages/Welcome/welcome";
import { UserIdentification } from "../pages/UserIdentification/userIdentification";
import { Confirmation } from "../pages/Confirmation/confirmation";
import Color from "../styles/colors"
import { PlantSelect } from "../pages/PlantSelect/plantselect";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle:{
                backgroundColor: Color.white
            },
        }}
    >

        <stackRoutes.Screen
            name= "Welcome"
            component={Welcome}
        />

        <stackRoutes.Screen
            name= "UserIdentification"
            component={UserIdentification}
        />

        <stackRoutes.Screen
            name= "Confirmation"
            component={Confirmation}
        />

        <stackRoutes.Screen
            name= "PlantSelect"
            component={PlantSelect}
        />

    </stackRoutes.Navigator>
)
export default AppRoutes;