import * as React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Avatar, Card, IconButton, Text } from "react-native-paper";

const AccueilRoute = ({ navigation }) => {
  const points = 15;
  const listBestComp = [{title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:1},
  {title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:2},
  {title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:3}];

  const listEvent = [{title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:1},
  {title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:2},
  {title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:3}]

  return (
    <View style={style.container}>
      <View style={style.scoreSection}>
        <Text variant="titleMedium">Votre nombre de points:{points} </Text>
        <Avatar.Icon size={24} icon="database" />
      </View>
      <View style={style.mainSectionEvent}>
        <Text variant="titleLarge">Evènements</Text>
        <FlatList
        horizontal={true}
        data={listEvent}
        renderItem={({item}) => {
          return <Card style={{margin:10}}  mode="contained">
          <Card.Title
              title={item.title}
              subtitle={item.subtitle}
              left={(props) => <Avatar.Icon {...props} icon="calendar" />}

            />
          </Card>
        }}
        keyExtractor={item => item.id}
      />

      </View>

      <View style={style.mainSection}>
        <Text variant="titleLarge">Proche de chez vous</Text>
        <FlatList
        data={listEvent}
        renderItem={({item}) => {
          return <Card style={{margin:5}}  mode="contained">
          <Card.Title
              title={item.title}
              subtitle={item.subtitle}
              left={(props) => <Avatar.Icon {...props} icon="store" />}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="dots-vertical"
                  onPress={() => {}}
                />
              )}
            />
          </Card>
        }}
        keyExtractor={item => item.id}
      />
      </View>

      <View style={style.mainSection}>
        <Text variant="titleLarge">Meilleures entreprises</Text>
        <FlatList
        data={listEvent}
        renderItem={({item}) => {
          return <Card style={{margin:5}} mode="contained">
          <Card.Title
              title={item.title}
              subtitle={item.subtitle}
              left={(props) => <Avatar.Icon {...props} icon="store" />}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="dots-vertical"
                  onPress={() => {}}
                />
              )}
            />
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
  scoreSection: {
    flex: 0.05,
    width: "100%",
    justifyContent: "flex-end",
    paddingRight: 10,
    flexDirection: "row",
  },
  mainSectionEvent: {
    flex: 0.25,
    width: "100%",
    justifyContent: "end",
    margin:20,
    paddingLeft: 20,
  },
  mainSection: {
    flex: 0.35,
    margin:20,
    width: "100%",
    justifyContent: "end",
    paddingLeft: 20,
  },
});
export default AccueilRoute;
