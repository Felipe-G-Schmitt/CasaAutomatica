import { View } from "react-native";
import { Text } from "react-native-paper";
/**
     * Criar um TextInput que faça buscas no banco e exiba em um Flatlist
     * Lembre-se de usar a expressão "utilizando a Web Version 9 do Firebase"
     */
export default function HomeScreen({navigation}) {
    return (
        <View style={{ alignItems: "center", display: "flex", justifyContent: "content",backgroundColor: "#141414", height: "100%",}}>
          <View style={{ flex: 1, marginTop: 200, width: 350,}}>
            <Text style={{ textAlign: "center", fontSize: 40, marginBottom: "5px", color: "white"}}>
              Seja bem vindo!
            </Text>
          </View>
        </View>
    )
}