import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Accueil from './ecrans/Accueil';
import CoursListe from './ecrans/CoursListe';
import MesCours from './ecrans/MesCours';
import Horaire from './ecrans/Horaire';
import APropos from './ecrans/APropos';
import Entete from './composants/entete';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from './ecrans/Details';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AccueilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page d'accueil" component={Accueil} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

function CoursListeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Liste de cours" component={CoursListe} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

function MesCoursStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mes cours" component={MesCours} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

function HoraireStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Horaire" component={Horaire} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

function InfoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mes informations" component={APropos} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused ? 'home' : 'home';
              size = focused ? 35 : 20;
              color = focused ? 'black' : 'black';
            } else if (route.name === 'ListeCours') {
              iconName = focused ? 'videocam-outline' : 'videocam-outline';
              size = focused ? 35 : 20;
              color = focused ? 'black' : 'black';
            } else if (route.name === 'MesCours') {
              iconName = focused ? 'checkmark-circle-outline' : 'checkmark-circle-outline';
              size = focused ? 35 : 20;
              color = focused ? 'black' : 'black';
            } else if (route.name === 'MonHoraire') {
              iconName = focused ? 'information-circle-outline' : 'information-circle-outline';
              size = focused ? 35 : 20;
              color = focused ? 'black' : 'black';
            }
            else if (route.name === 'MesInfo') {
              iconName = focused ? 'information-circle-outline' : 'information-circle-outline';
              size = focused ? 35 : 20;
              color = focused ? 'black' : 'black';
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
      >

        <Tab.Screen
          name="Accueil"
          component={AccueilStack}
          options={{ header: (props) => <Entete />, }}
        />
        <Tab.Screen
          name="ListeCours"
          component={CoursListeStack}
          options={{ header: (props) => <Entete />, }}
        />
        <Tab.Screen
          name="MesCours"
          component={MesCoursStack}
          options={{ header: (props) => <Entete />, }}
        />
          <Tab.Screen
          name="MonHoraire"
          component={HoraireStack}
          options={{ header: (props) => <Entete />, }}
        />
        <Tab.Screen
          name="MesInfo"
          component={InfoStack}
          options={{ header: (props) => <Entete />, }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
