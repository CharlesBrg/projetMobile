import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Alert, ImageBackground } from 'react-native';
import coursStyle from '../styles/coursStyles';
import liste_cours from '../data/listecours';
import { useRoute } from '@react-navigation/native';
import { Card, Avatar, Button, Searchbar } from 'react-native-paper';
import AwesomeIcon5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const iconTheorie = (props) => <AwesomeIcon5 {...props} name="brain" size={32} />;
const iconPratique = (props) => <AwesomeIcon5 {...props} name="mask" size={32} />;

const CoursListe = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const onChangeSearch = (query) => {
        setSearchQuery(query);
        const filtrerResultats = liste_cours.filter(
            (item) =>
                item.titre.toLowerCase().includes(query.toLowerCase()) ||
                item.categorie.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filtrerResultats);
    };

    return (
        <View style={coursStyle.container}>
            <ImageBackground imageStyle={{ opacity: 0.5 }} style={coursStyle.arriereplan} source={require("../assets/images/arriereplanxmen.jpg")}>
                <Searchbar placeholder="Rechercher un cours..." onChangeText={onChangeSearch} value={searchQuery} style={coursStyle.search} />
                <FlatList
                    data={searchResults.length > 0 ? searchResults : liste_cours}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item: coursItem }) => (
                        <View style={coursStyle.listItem}>
                            <Card mode="elevated" style={{ width: '100%' }}>
                                <Card.Title title={coursItem.titre} subtitle={coursItem.categorie} left={coursItem.categorie === 'Théorique' ? iconTheorie : iconPratique} />
                                <Card.Content>
                                    <Text variant="titleLarge">{coursItem.duree}h par semaine - {coursItem.jour}</Text>
                                </Card.Content>
                                <Card.Actions>
                                    <Button style={coursStyle.boutonDetails} onPress={() => navigation.navigate('Details', { donnees: { item: coursItem } })}>
                                        Details
                                    </Button>
                                </Card.Actions>
                            </Card>
                        </View>
                    )}
                />
            </ImageBackground>
        </View>
    );
};

export default CoursListe;
