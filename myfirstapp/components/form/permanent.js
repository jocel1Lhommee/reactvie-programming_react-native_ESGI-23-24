import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Permanent = () => {
  return <Text style={styles.text}>Bienvenue, Enseignant permanent!</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Permanent;
