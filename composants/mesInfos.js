import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import infoStyle from "../styles/infoStyles";

function Informations() {
    return (
        <View style={infoStyle.but}>
            <ImageBackground imageStyle={{ opacity: 0.5 }} style={infoStyle.arriereplan} source={require("../assets/images/arriereplanxmen.jpg")}>
                <Text style={infoStyle.info}>Charles BOURGEOIS</Text>
                <Text style={infoStyle.info}>Programmation d'applications mobiles</Text>
                <Text style={infoStyle.info}>Projet Synthèse</Text>
                <Text style={infoStyle.info}>Session Automne - 2023</Text>
                <Text style={infoStyle.info}>Stéphane PELLETIER</Text>
                <Text style={infoStyle.info}>charles.bourgeoispro@gmail.com</Text>
            </ImageBackground>
        </View>
    );
}

export default Informations;