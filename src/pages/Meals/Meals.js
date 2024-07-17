import React from "react";
import { View,Text, FlatList } from "react-native";
import useFetch from "../hooks/useFetch";
import MealCard from "../../components/MealCard";

const Meals=({route,navigation})=>{

    const {title}=route.params;

    const {error,loading,data}=useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${title}`)

    function onSelect(name){
        navigation.navigate("Details",{name})
    }

    return (
        <FlatList
        data={data?.meals}
        renderItem={({item})=> {
            return <MealCard image={item.strMealThumb} title={item.strMeal} onPress={()=> onSelect(item.strMeal) }  />
        }}
        />
    )
}
export default Meals;