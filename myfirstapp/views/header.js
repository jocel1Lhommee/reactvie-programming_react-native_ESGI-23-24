import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import esgi from '../components/header/img/esgi.jpg';

function Header() {
  return (
    <View style={styles.header}>
      <Image source={esgi} style={styles.logo} alt="logo_esgi" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f8f8f8',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 600,  // Adjust the width according to your needs
    height: 150,  // Adjust the height according to your needs
    resizeMode: 'contain',
  },
});

export default Header;
