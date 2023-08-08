import * as React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Avatar, Card, IconButton, Text,TextInput } from "react-native-paper";

const ProfilRoute = ({ navigation }) => {

  const listEvent = [{title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:1},
  {title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:2},
  {title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:3}]

  return (
    <View style={style.container}>
<Text variant="titleLarge">Mon Profil</Text>
      <View style={style.mainSection}>
      <TextInput
        mode="outlined"
      label="Téléphone"
      style={{width:200}}
      value={"0246583"}
      disabled
    />
      <TextInput
        mode="outlined"
      label="Année de naissance"
      style={{width:200}}
      value={""}
      onChangeText={text => {}}
    />
            <TextInput
        mode="outlined"
      label="Email"
      style={{width:200}}
      value={""}
      onChangeText={text => {}}
    />
            <TextInput
        mode="outlined"
      label="Adresse"
      style={{width:200}}
      value={""}
      onChangeText={text => {}}
    />

      </View>

    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  mainSection: {
    flex: 0.8,
    margin:20,
    width: "100%",
    justifyContent: "end",
    paddingLeft: 20,
  },
});
export default ProfilRoute;
