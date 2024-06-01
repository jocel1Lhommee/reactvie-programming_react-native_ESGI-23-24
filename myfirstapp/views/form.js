import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Etudiant from '../components/form/etudiant';
import Permanent from '../components/form/permanent';
import Contractuel from '../components/form/contractuel';
import Intervenant from '../components/form/intervenant';
import Search from '../components/form/search';

const Form = () => {
    const [categorie, setCategorie] = useState('Etudiant');
  const [name, setName] = useState('');
  const [guestList, setGuestList] = useState([
    { name: 'Loïs', isHere: false },
    { name: 'Jocelyn', isHere: false },
    { name: 'Guillaume', isHere: false },
    { name: 'Teddy', isHere: false },
  ]);

  const bienvenue = () => {
    Alert.alert('❤️Bienvenue à ESGI Party !❤️');
  };

  const monnomsaffiche = () => {
    let foundGuest = guestList.find(guest => guest.name === name);
    if (foundGuest) {
      setGuestList(
        guestList.map(guest =>
          guest.name === name ? { ...guest, isHere: true } : guest
        )
      );
      Alert.alert(renderCategorySpecificMessage());
    } else {
      Alert.alert(`Désolé, ${name} n'est pas sur la liste des invités.`);
    }
  };

  const renderCategorySpecificMessage = () => {
    switch (categorie) {
      case 'Etudiant':
        return `Bienvenue, ${name} !`;
      case 'Enseignant permanent':
        return `Bienvenue, ${name} !`;
      case 'Enseignant contractuel':
        return `Bienvenue, ${name} !`;
      case 'Intervenant externe':
        return `Bienvenue, ${name} !`;
      default:
        return `❤️Bienvenue à ESGI Party ${name} !❤️ Vous êtes : ${categorie}`;
    }
  };

  const renderCategorySpecificComponent = () => {
    switch (categorie) {
      case 'Etudiant':
        return <Etudiant />;
      case 'Enseignant permanent':
        return <Permanent />;
      case 'Enseignant contractuel':
        return <Contractuel />;
      case 'Intervenant externe':
        return <Intervenant />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choisissez votre catégorie :</Text>
      <Picker
        selectedValue={categorie}
        style={styles.picker}
        onValueChange={(itemValue) => setCategorie(itemValue)}
      >
        <Picker.Item label="Etudiant" value="Etudiant" />
        <Picker.Item label="Enseignant permanent" value="Enseignant permanent" />
        <Picker.Item label="Enseignant contractuel" value="Enseignant contractuel" />
        <Picker.Item label="Intervenant externe" value="Intervenant externe" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Votre nom"
        value={name}
        onChangeText={setName}
      />
      <Button title="Allons-y" onPress={() => { bienvenue(); monnomsaffiche(); }} />
      {renderCategorySpecificComponent()}
      <Search guestList={guestList} />
    </View>
  );
};



const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 10,
    },
    picker: {
      height: 50,
      width: '100%',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
});

export default Form;
