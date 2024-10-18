import { StyleSheet } from "react-native";
const detailStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    arriereplan: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    categorie: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titre: {
        fontSize: 40,
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'AvenirNext-Bold',
        margin:"2%"
    },
    description: {
        textAlign: 'justify',
        fontSize : 16,
        fontWeight:'bold',
    },
    scrollContainer: {
        padding:5,
        borderWidth:5,
        margin:"10%",
        height:"20%",
        backgroundColor:"white",
        opacity:0.6,
    },
    profNom : {
        fontSize : 16,
        fontWeight:'bold',
        textAlign:'center'
    },
    arriereplan: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    bouton:{
        backgroundColor : '#38A2DF',
        margin:'10%',
    }
});

export default detailStyles;
