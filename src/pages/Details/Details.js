import React from "react";
import { View,Text,Image,ScrollView,Linking,Button, TouchableOpacity } from "react-native";
import useFetch from "../hooks/useFetch";
import styles from "../Details/Details.style"

const Details=({route})=>{
    
    const {name}=route.params;

    function handleYoutube(link){

        Linking.openURL(link)
    }
    
    const{error,loading,data}=useFetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    
    return (
        <ScrollView  style={styles.container}  >
            <Image style={styles.image} src={data?.meals[0].strMealThumb} ></Image>
            <View style={styles.text_container} >
                <Text style={styles.title} >{data?.meals[0].strMeal}</Text>
                <Text style={styles.instructions} >{data?.meals[0].strInstructions}</Text>
                
            </View>
            <TouchableOpacity style={styles.button}  onPress={()=>handleYoutube(data?.meals[0].strYoutube)} >
             <Text style={styles.text_Youtube} >WATCH ON YOUTUBE</Text>   
            </TouchableOpacity>
        </ScrollView>
    )
}
export default Details;