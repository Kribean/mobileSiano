import * as React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Avatar, Card, IconButton, Text } from "react-native-paper";

const CalendarRoute = ({ navigation }) => {

  const listEvent = [{title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:1},
  {title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:2},
  {title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:3}]

  return (
    <View style={style.container}>
<Text variant="titleLarge">Evènements</Text>
      <View style={style.mainSection}>
        
        <FlatList
        data={listEvent}
        renderItem={({item}) => {
          return <Card style={{flex:0.5,margin:10}}  mode="contained">
          <Card.Title
              title={item.title}
              subtitle={"secteur"}
              left={(props) => <Avatar.Icon {...props} icon="calendar" />}
            />
            <View style={{flexDirection:"column"}}>
            <Text variant="labelLarge" style={{fontWeight:"bold"}}>Titre de l'évènement</Text>
            <Text variant="labelLarge">Foire aux légumes</Text>
            <Text variant="labelLarge" style={{fontWeight:"bold"}}>Date de l'évènement</Text>
            <Text variant="labelLarge">10/12/2023,dure 2heures</Text>
            <Text variant="labelLarge" style={{fontWeight:"bold"}}>Lieu de l'évènement</Text>
            <Text variant="labelLarge">Anse duFour</Text>
            <Text variant="labelLarge" style={{fontWeight:"bold"}}>Prix</Text>
            <Text variant="labelLarge">5 euros</Text>
            <Text variant="labelLarge" style={{fontWeight:"bold"}}>Description</Text>
            <Text variant="labelLarge">La tortue de 4m de long surmontée de son cavalier s’est installée à l’entrée du tout nouveau Parc des Expositions de Strasbourg.

10 jours durant, elle répétera inlassablement à tous les visiteurs de la Foire Européenne de Strasbourg : « Retrouvez moi du 22 au 25 septembre à Illkirch au carrefour du Baggersee pour le plus Grand show de Fruits et Légumes jamais organisé en France ».

Une tortue c’est têtu, le message sera assurément passé !</Text>
            </View>
          </Card>
        }}
        keyExtractor={item => item.id}
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
export default CalendarRoute;
