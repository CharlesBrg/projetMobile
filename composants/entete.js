import { StyleSheet, View, Text, Image } from "react-native";
import enteteStyle from "../styles/enteteStyles";

function Entete() {
    return (
        <View style={enteteStyle.header}>
            <Image style={enteteStyle.image} source={require("../assets/images/logocegep.png")} />
            <View style={enteteStyle.droite}>
                <Text style={enteteStyle.titre}>Projet Synthèse</Text>
                <Text style={enteteStyle.titre}>X-Collège</Text>
            </View>
        </View>
    );
}

export default Entete;
