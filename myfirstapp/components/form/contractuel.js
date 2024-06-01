import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Contractuel = () => {
  return <Text style={styles.text}>Bienvenue, Enseignant contractuel!</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Contractuel;
