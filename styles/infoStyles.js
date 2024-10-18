import { StyleSheet } from "react-native";

const infoStyle = StyleSheet.create({
    but: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    info: {
        fontWeight: 'bold',
        textAlign: 'center',
        margin: "5%",
        fontSize: 20,
        fontFamily: 'AvenirNext-Bold',
        backgroundColor: "#8ABBD7",
        borderWidth: 5
    },
    arriereplan: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
        justifyContent: 'center',
    }
});

export default infoStyle;