import React from 'react'
import {StyleSheet, View, TextInput, Button, TouchableNativeFeedbackBase} from 'react-native'
class Accueil extends React.Component{
    render() {
        return (
            <View>
                <TextInput style={{ marginHorizontal: '20',marginTop: '100', paddingHorizontal: '20%', textAlign: 'center', borderColor:'blue', borderWidth: 1, borderRadius: 10}} placeholder='Votre nom' />
                <Button title='Rechercher' onPress={() => {}}/>
            </View>
            )
        }
    }
export default Accueil