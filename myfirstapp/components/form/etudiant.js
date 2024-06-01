import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Etudiant = () => {
  return <Text style={styles.text}>Bienvenue, Étudiant!</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Etudiant;
