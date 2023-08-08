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
          return <Card style={{flex:0.5,height:250,margin:10}}  mode="contained">
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
