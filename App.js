import { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import axios from "axios";
  
export default function App() {
    const [nome, setNome] = useState(null);
    baseUrl =  'https://investmediaserver.glitch.me';
    const getNome = () => {
        axios
            .get(`${baseUrl}/nomeUsuario`)
            .then((response) => {
                console.log(response.data);
                setNome(response.data[0].nome);
                console.log(nome)
            });
    };
  
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{nome}</Text>
            <Button title="Teste" 
                onPress={getNome} color="blue" />
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        marginHorizontal: 20,
    },
});