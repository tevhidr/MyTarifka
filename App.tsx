import React from "react";
import {} from "react-native"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./src/pages/Categories";
import Meals from "./src/pages/Meals";
import Details from "./src/pages/Details";

const Stack=createNativeStackNavigator()

 const Router = () => {
  return(
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} ></Stack.Screen>
        <Stack.Screen name="Meals"  component={Meals} ></Stack.Screen>
        <Stack.Screen name="Details"  component={Details} ></Stack.Screen>

      </Stack.Navigator>
     </NavigationContainer>
  )
}
export default Router;