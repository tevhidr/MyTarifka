import React from "react";
import { View,Text, FlatList, Image } from "react-native";
import useFetch from "../hooks/useFetch";
import CategoryCard from "../../components/CategoryCard";

const Categories=({navigation})=>{

    function onSelect(title){
        navigation.navigate("Meals",{title})
    }

    const {error,loading,data}=useFetch("https://www.themealdb.com/api/json/v1/1/categories.php")

    
    return (
        <FlatList 
            data={data?.categories}
            renderItem={({item})=> {
                 return <CategoryCard image={item.strCategoryThumb} title={item.strCategory} onPress={()=> onSelect(item.strCategory)} />
            }}
        />
    )
}
export default Categories;