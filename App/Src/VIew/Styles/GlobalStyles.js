import { Dimensions, StyleSheet } from "react-native";
import { COLORS } from "./Typography";

const LAYOUT ={
    SafeArea:{
        flex: 1,
        backgroundcolor:COLORS.white,
        alignItems:'center'
    },
    container:{
        flex:1
    },
    pageconstainer:{
        padding: 16,
    }
}
const TextinputStyle ={
    normal :{
      
        heigth:Dimensions.get('window').height/3,
    },
    inner :{
        width:Dimensions.get('window').width/1.2,
        heigth:100,
        borderWidth:1
    
    }
}

export  const Gloabalstyle = {
LAYOUT,
TextinputStyle
}
