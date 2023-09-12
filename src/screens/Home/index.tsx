import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [person, setPerson] = useState('')
  const [participants, setParticipants] = useState<string[]>(['Gutebs','Jefebs','Iagebs','lukebs','Rafebs','Letebs','Leonebs','Junebs'])
  function handleParticipantAdd(name:string){
    if(participants.includes(name)){
      return alert('Essa pessoa já está na lista!')
    }
    setParticipants(prevState => [...prevState,person])
    setPerson('')
  }
  function handleParticipantRemove(name:string){
    Alert.alert('Remover',`Remover ${name}?`,[{
      text:'Sim',
      onPress:() => setParticipants(prevState => prevState.filter(participant => participant !== name))
    },
    {
      text:'Não'
    }])
  }
  return (

    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" translucent/>
      <Text style={styles.title}>Nome do Evento</Text>
      <Text style={styles.subtitle}>Segunda, 4 de setembro de 2023, 19:31</Text>
      <View style={styles.form}>
      <TextInput value={person}  onChangeText={setPerson} style={styles.input} placeholder="Nome Completo" placeholderTextColor={"#6b6b6b"}/>
      <TouchableOpacity style={styles.button} onPress={()=> handleParticipantAdd('')}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      </View>
      {/* <ScrollView>
      {participants.map((item,index) => (
        <Participant key={index} name={item} onRemove={()=> handleParticipantRemove(item)}/>
      ))}
      </ScrollView> */}
      <FlatList
      data={participants}
      keyExtractor={(item,index) => index.toString()}
      renderItem={({item}) => (
        <Participant name={item} onRemove={()=> handleParticipantRemove(item)}/>
      )}
      />
    </View>
  );
}
