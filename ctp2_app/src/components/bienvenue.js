import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import guestList from "../ressources/guestList.json";

const images = {
  lois: require('../img/lois.jpeg'),
  jocelyn: require('../img/jocelyn.jpeg'),
  teddy: require('../img/teddy.jpeg'),
  raphael: require('../img/raphael.jpeg'),
  // Ajoutez d'autres images ici au besoin
};

function Bienvenue() {
    return (
        <View>
            {guestList.map((guest, index) => (
                <View key={index} style={styles.guestContainer}>
                    <Image source={images[guest.img]} style={styles.image} /> {/* Utilisez l'objet images pour charger les images */}
                    <Text>{guest.name}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    guestContainer: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
    },
});

export default Bienvenue;
