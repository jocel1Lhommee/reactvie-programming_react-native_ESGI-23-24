import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Intervenant = () => {
  return <Text style={styles.text}>Bienvenue, Intervenant externe!</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Intervenant;
