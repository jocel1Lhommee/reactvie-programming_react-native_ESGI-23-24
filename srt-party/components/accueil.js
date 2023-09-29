import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Image,
} from "react-native";

const styles = StyleSheet.create({
    view: {
        width: "100%",
    },
    textinput: {
        backgroundColor: 'white',
        marginTop: 100,
        marginLeft: 20,
        marginRight: 20,
        height: 50,
        borderColor: 'blue',
        borderWidth: 1,
        paddingLeft: 15,
        borderRadius: 15
    },
    footer: {
        alignItems: "center",
        marginTop: 50,
    }
});

class Accueil extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Image style={styles.images} source={require('../assets/esgi.jpg')} />
                <View style={styles.container}>
                    <TextInput style={styles.textinput} placeholder='Votre nom' />
                    <View style={styles.SignIn}>
                        <Text style={styles.label}>{"S'enregistrer : "}</Text>
                        <Button color='blue' title='SIGN UP' onPress={() => { }} />
                    </View>
                    <View style={styles.Search}>
                        <Text style={styles.label}>{"Rechercher :"}</Text>
                        <Button color='red' title='SEARCH' onPress={() => { }} />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text}>{"ESGI 2023-2024"}</Text>
                </View>
            </View>
        )
    }
}

export default Accueil;
