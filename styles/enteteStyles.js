import { StyleSheet } from "react-native";

const enteteStyle = StyleSheet.create({
    header: {
        backgroundColor: '#38A2DF',
        justifyContent: 'center',
        alignItems:'center',
        width:"100%",
        padding:"18%",
        paddingBottom:"6%",
        flexDirection:"row",
    },
    titre:{
        fontSize:18,
        fontWeight:'bold',
        marginTop:"8%",
        fontFamily:'AvenirNext-Bold',
        paddingLeft:"5%"
    },
    image:{
        width:"50%",
        height:"100%",
    }
});

export default enteteStyle;