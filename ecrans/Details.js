import { StyleSheet, Text, View, ScrollView, FlatList, Pressable, Alert, ImageBackground} from "react-native";
import liste_cours from "../data/listecours";
import { useRoute } from "@react-navigation/native";
import { Card, Avatar, Button, Searchbar } from "react-native-paper";
import AwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import detailStyles from '../styles/detailStyles';

const Details = () => {
    const route = useRoute();
    const { donnees } = route.params;
    const { item } = donnees;
    const [inscrit, setinscrit] = useState(false);
    const coursId = item.id.toString();
    
    const inscription = async () => {
        const updatedInscription = true;
        setinscrit(updatedInscription);
        updateDonneesItem({ inscrit: updatedInscription });
        Alert.alert('Confirmation', 'Vous êtes maintenant inscrit au cours : ' + (item.titre));
        await AsyncStorage.setItem(`inscrit_${coursId}`, updatedInscription.toString());
    };

    const updateDonneesItem = (updatedNotes) => {
        const updatedDonneesItem = { ...item, ...updatedNotes };
        donnees.item = updatedDonneesItem;
    };

    useEffect(() => {
        const loadCours = async () => {
            const storedinscrit = await AsyncStorage.getItem(`inscrit_${coursId}`);
            setinscrit(storedinscrit);
        };
        loadCours();
    }, [coursId]);

    return (
        <View style={detailStyles.page}>
            <ImageBackground imageStyle={{ opacity: 0.1 }} style={detailStyles.arriereplan} source={require("../assets/images/arriereplanxmen.jpg")}>
                <Text style={detailStyles.titre}>{item.titre}</Text>
                <Text style={detailStyles.categorie}>{item.categorie} - {item.duree}h</Text>
                <View style={detailStyles.scrollContainer}>
                    <ScrollView>
                        <Text style={detailStyles.description}>
                            {item.description}
                        </Text>
                    </ScrollView>
                </View>
                <Text style={detailStyles.profNom}>Le cours est donné par : {item.prof}</Text>
                <Button style={detailStyles.bouton} mode="contained" onPress={() => inscription()}>S'inscrire</Button>
            </ImageBackground>
        </View>
    );
};
export default Details;
