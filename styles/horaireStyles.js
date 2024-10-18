import { StyleSheet } from 'react-native';

const emploiStyle = StyleSheet.create({
    titre: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: "10%",
        fontFamily: 'AvenirNext-Bold',
        paddingLeft: "5%",
    },
    container: {
        backgroundColor: '#8ABBD7',
        flex: 1
    },
    listItem: {
        margin: "5%",
    },
    boutonDetails: {
        backgroundColor: "#38A2DF"
    },
    arriereplan: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default emploiStyle;
