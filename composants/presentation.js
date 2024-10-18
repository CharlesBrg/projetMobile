import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import presentationStyle from "../styles/presentationStyles";

function Presentation() {
    return (
        <View style={presentationStyle.but}>
            <ImageBackground imageStyle={{opacity:0.5}}style={presentationStyle.arriereplan} source={require("../assets/images/arriereplanxmen.jpg")}>
                <Text style={presentationStyle.text}>Bienvenue dans l'institut Charles Xavier ! {"\n"} {"\n"}Vous trouverez une liste de cours de choix, vous pourrez consulter leur fiches et vous inscrire.  {"\n"}{"\n"}Votre horaire sera à votre disposition.</Text>
                <Text style={presentationStyle.question}>Pour toutes questions, vous trouverez les contacts de l'équipe d'administration dans l'onglet "Info"</Text>
            </ImageBackground>
        </View>
    );
}

export default Presentation;
