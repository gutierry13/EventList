import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";

export default function Home() {
  function handleParticipantAdd(){

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do Evento</Text>
      <Text style={styles.subtitle}>Segunda, 4 de setembro de 2023, 19:31</Text>
      <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Nome Completo" placeholderTextColor={"#6b6b6b"}/>
      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>
      <Participant/>
    </View>
  );
}
