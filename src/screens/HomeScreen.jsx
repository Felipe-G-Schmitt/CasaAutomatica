import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function HomeScreen({ navigation }) {
  const [isLuzAcesa, setIsLuzAcesa] = useState(false);
  const [isArCondicionadoLigado, setIsArCondicionadoLigado] = useState(false);
  const [isTvLigada, setIsTvLigada] = useState(false);

  const toggleLuz = () => {
    setIsLuzAcesa(!isLuzAcesa);
  };

  const toggleArCondicionado = () => {
    setIsArCondicionadoLigado(!isArCondicionadoLigado);
  };

  const toggleTv = () => {
    setIsTvLigada(!isTvLigada);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/bg-site.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <View style={styles.center}> 
            <Text style={{ color: "#ffffff", marginBottom: 20, fontSize: 30, alignContent: "center", justifyContent: "center", alignItems: "center", marginTop: 20}} >Aparelhos integrados</Text>
            <View style={{ paddingLeft: 50, paddingRight: 50, paddingTop: 20, paddingBottom: 20, borderWidth: 2, borderColor: "white", borderRadius: 15, alignItems: "center"}}>
              <Text style={{ color: "#ffffff", marginBottom: 20, fontSize: 20, borderBottomColor: "white", borderBottomWidth: 2, paddingLeft: 80, paddingRight: 80 }}>Lâmpada</Text>
              <Image
                source={isLuzAcesa ? require("../assets/luz-acessa.png") : require("../assets/luz-apagada.png")}
                resizeMode="contain"
                style={{
                  width: 150,
                  height: 200,
                }}
              />
              <Button
                onPress={toggleLuz}
                style={{ marginTop: 20, backgroundColor: "#fff", borderRadius: 15, width: 200, height: 40 }}
                mode="contained"
              >
                <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>
                  {isLuzAcesa ? "Desligar" : "Ligar"}
                </Text> 
              </Button>

              <Text style={{ color: "#ffffff", marginBottom: 20, marginTop: 30, fontSize: 20, borderBottomColor: "white", borderBottomWidth: 2, paddingLeft: 50, paddingRight: 50 }}>Ar Condicionado</Text>
              <Image
                source={isArCondicionadoLigado ? require("../assets/ar-ligado.png") : require("../assets/ar-desligado.png")}
                resizeMode="contain"
                style={{
                  width: 250,
                  height: 200,
                }}
              />
              <Button
                onPress={toggleArCondicionado}
                style={{ marginTop: 20, backgroundColor: "#fff", borderRadius: 15, width: 200, height: 40 }}
                mode="contained"
              >
                <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>
                  {isArCondicionadoLigado ? "Desligar" : "Ligar"}
                </Text> 
              </Button>
              <Text style={{ color: "#ffffff", marginBottom: 20, marginTop: 30, fontSize: 20, borderBottomColor: "white", borderBottomWidth: 2, paddingLeft: 120, paddingRight: 120 }}>TV</Text>
              <Image
                source={isTvLigada ? require("../assets/tv-ligada.png") : require("../assets/tv-desligada.png")}
                resizeMode="contain"
                style={{
                  width: 220,
                  height: 200,
                }}
              />
              <Button
                onPress={toggleTv}
                style={{ marginTop: 20, backgroundColor: "#fff", borderRadius: 15, width: 200, height: 40 }}
                mode="contained"
              >
                <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>
                  {isTvLigada ? "Desligar" : "Ligar"}
                </Text> 
              </Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
