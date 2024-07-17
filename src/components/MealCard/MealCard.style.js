import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        flex:1,
        
        margin:10,
        
        
    },
    image:{ 
        width:Dimensions.get("window").width,
        height:250,
        
        
       
        
    },
    title:{
        color:"white",
        fontSize:24,
        textAlign:"center"
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
      },
})