import {useState} from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Avatar, Card, IconButton, Text, Button,Switch } from "react-native-paper";
import CardScore from "./CardScore";


const CompanyRoute = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => {

    if(!isSwitchOn)
    {

    }else{

    }
    return setIsSwitchOn(!isSwitchOn);
    };

  const listEvent = [
    {
      title: "toloman",
      subtitle: "toloman sé on antrepise ki lé mété an avant...",
      id: 1,
    },
    {
      title: "toloman",
      subtitle: "toloman sé on antrepise ki lé mété an avant...",
      id: 2,
    },
    {
      title: "toloman",
      subtitle: "toloman sé on antrepise ki lé mété an avant...",
      id: 3,
    },
  ];

  return (
    <View style={style.container}>
      <Text variant="titleLarge">
        Evaluer les entreprises qui m'ont contacté
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text variant="labelMedium">
            "Réévaluez en cliquant ici !
            </Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
      <View style={style.mainSection}>
        <FlatList
          data={listEvent}
          renderItem={({ item }) => {
            return (
              <CardScore item={item}/>
            );
          }}
          keyExtractor={(item) => item.id}
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
    margin: 20,
    width: "100%",
    justifyContent: "end",
    paddingLeft: 20,
  },
});
export default CompanyRoute;
