import React from "react";
import {View,Text, Image, TouchableWithoutFeedback} from "react-native"
import styles from "../CategoryCard/CategoryCard.style"

const CategoryCard=(props)=>{

    return(
        <TouchableWithoutFeedback onPress={props.onPress} >
        <View style={styles.container} >
           
                <View style={styles.inner_container} >
                    <Image style={styles.image}   src={props.image} ></Image>
                    <Text style={styles.text} >{props.title}</Text>

                </View>
                
               
            
        </View>
        </TouchableWithoutFeedback>
    )
}
export default CategoryCard;