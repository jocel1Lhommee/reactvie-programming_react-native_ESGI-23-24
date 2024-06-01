import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const Search = ({ guestList }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des invités</Text>
      <FlatList
        data={guestList}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text style={styles.guest}>{item.name} - {item.isHere ? 'Présent' : 'Absent'}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  guest: {
    fontSize: 16,
    padding: 5,
  },
});

export default Search;
