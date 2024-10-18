import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Alert, Linking, ImageBackground } from 'react-native';
import horaireStyles from '../styles/horaireStyles';
import liste_cours from '../data/listecours';
import { useRoute } from '@react-navigation/native';
import { Card, Button, Searchbar } from 'react-native-paper';
import AwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const iconTheorie = (props) => <AwesomeIcon5 {...props} name="brain" size={32} />;
const iconPratique = (props) => <AwesomeIcon5 {...props} name="mask" size={32} />;

const Horaire = () => {
    const isFocused = useIsFocused();
    const [cours, setCours] = useState([]);
    const [totalHeures, setTotalHeures] = useState(0);

    const chargerDonnees = useCallback(async () => {
        try {
            const nouvellesDonnees = liste_cours.map(async (item) => {
                const coursId = item.id.toString();
                const storedinscrit = await AsyncStorage.getItem(`inscrit_${coursId}`);
                return {
                    ...item,
                    inscrit: storedinscrit === 'true', // Convertir en booléen
                };
            });

            Promise.all(nouvellesDonnees).then((cours) => {
                setCours(cours);
                const total = cours.reduce((acc, curr) => acc + (curr.inscrit ? curr.duree : 0), 0);
                setTotalHeures(total);
            });
        } catch (error) {
            console.error('ça marche pas', error);
        }
    }, []);

    const handleDesinscription = (item) => {
        Alert.alert(
            'Confirmation',
            `Voulez-vous vraiment vous désinscrire du cours "${item.titre}" ?`,
            [
                {
                    text: 'Annuler',
                    style: 'cancel',
                },
                {
                    text: 'Se désinscrire',
                    onPress: async () => {
                        const coursId = item.id.toString();
                        await AsyncStorage.setItem(`inscrit_${coursId}`, 'false');
                        chargerDonnees();
                    },
                },
            ],
            { cancelable: false }
        );
    };

    useEffect(() => {
        if (isFocused) {
            chargerDonnees();
        }
    }, [isFocused, chargerDonnees]);

    return (
        <View style={horaireStyles.container}>
            <ImageBackground imageStyle={{ opacity: 0.1 }} style={horaireStyles.arriereplan} source={require("../assets/images/arriereplanxmen.jpg")}>
                <FlatList
                    data={['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi']}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item: day }) => (
                        <View>
                            <Text style={horaireStyles.titre}>{day} : </Text>
                            <FlatList
                                data={cours.filter((item) => item.inscrit === true && item.jour === day)}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <View style={horaireStyles.listItem}>
                                        <Card mode="elevated" style={{ width: '100%' }}>
                                            <Card.Title title={item.titre} subtitle={item.categorie} left={item.categorie === 'Théorique' ? iconTheorie : iconPratique} />
                                            <Card.Content>
                                                <Text variant="titleLarge">{item.horaire}</Text>
                                            </Card.Content>
                                        </Card>
                                    </View>
                                )}
                            />
                        </View>
                    )}
                />
            </ImageBackground>
        </View>
    );
};

export default Horaire;
