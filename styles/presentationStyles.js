import { StyleSheet } from "react-native";

const presentationStyle = StyleSheet.create({
    but:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        
    },
    text:{
        padding:"10%",
        fontFamily:'Avenir-Roman',
        backgroundColor:'white',
        alignItems:"center",
        alignContent:'center',
        borderWidth:5,
        width:'80%',
        margin:'10%',
        backgroundColor:'#8ABBD7',
        fontWeight:"bold",
    },
    question:{
        padding:"10%",
        fontWeight:"bold",
        fontFamily:'AvenirNext-Bold',
        backgroundColor:'#8ABBD7',
        borderWidth:5,
        margin:"10%"
    },
    arriereplan:{
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
        justifyContent: 'center',
    }
});

export default presentationStyle;