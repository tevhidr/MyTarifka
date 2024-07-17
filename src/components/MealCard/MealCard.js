import React from "react";
import { View,Text,Image, TouchableWithoutFeedback } from "react-native";
import styles from "../MealCard/MealCard.style"
import FastImage from "react-native-fast-image";
import useFetch from "../../pages/hooks/useFetch";

const MealCard=(props)=> {

    

    return (
        <TouchableWithoutFeedback onPress={props.onPress} >       
            <View style={styles.container} >
            <Image style={styles.image}  src={props.image}  ></Image>
            <View  style={styles.overlay} >
            <Text style={styles.title} > {props.title} </Text>
            </View>
        </View>
        </TouchableWithoutFeedback>

    )
}
export default MealCard;