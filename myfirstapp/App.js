import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './views/header';
import Form from './views/form';
import Footer from './views/footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Form />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
