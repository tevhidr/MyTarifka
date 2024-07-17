import { StyleSheet } from "react-native";

export default StyleSheet.create({

        container:{
            flex:1,
            
            backgroundColor:"orange",
        },
        inner_container:{
            backgroundColor:"white",
            borderBottomLeftRadius:50,
            borderTopLeftRadius:50,
            padding:10,
            flexDirection:"row",
            margin:10,
            
        },
        
        image:{

            width:100,
            height:100,
            resizeMode:"contain",
            margin:10,
        },
        
        text:{

            textAlignVertical:"center",
            fontSize:24,
            fontWeight:"bold",
            margin:20,
        

        },

})