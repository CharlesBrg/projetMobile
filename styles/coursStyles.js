import { StyleSheet } from "react-native";

const filmStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8ABBD7'
    },

    categorie: {
        fontWeight: 'bold',
        marginLeft: '40%'

    },
    titre: {
        fontWeight: 'bold',
        fontFamily: 'AvenirNext-Bold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15
    },
    listItem: {
        margin: "5%",
    },
    boutonDetails: {
        backgroundColor: "#38A2DF"
    },
    search: {
        margin: "5%",
        backgroundColor: "white"
    },
    totalHeures: {
        fontWeight: 'bold',
        fontFamily: 'AvenirNext-Bold',
        margin: '10%',
        textAlign:'center',
        padding:'5%',
        fontSize: 15,
        backgroundColor: '#8ABBD7',
        borderWidth:5
    },
    arriereplan: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default filmStyle;