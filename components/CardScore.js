import * as React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Avatar, Card, IconButton, Text, Button } from "react-native-paper";

const CardScore = (props ) => {
 const [scoreDisplay,setScoreDisplay] = React.useState('?');
 const assess = [
    { score: 1, color: "#d61915" },
    { score: 2, color: "#f59517" },
    { score: 3, color: "#cace1f" },
    { score: 4, color: "#76d167" },
    { score: 5, color: "#1ac5a8ff" },
  ];
  return (
    <Card
    style={{ flex: 0.5, margin: 10, padding:10 }}
    mode="contained"
  >
    <Card.Title
      title={props.item.title}
      subtitle={props.item.subtitle}
      left={(props) => <Avatar.Icon {...props} icon="store" />}
      right={(props) => <Text variant="displaySmall">{scoreDisplay}/5</Text>}
    />
        <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
    <Text variant="titleMedium">Mauvais produit</Text>
    <Text variant="titleMedium">Excellent produit</Text>
        </View>
    <View style={{ flexDirection: "row" }}>
      {assess.map((element) => (
        <Button
        key={element.score}
          mode="contained"
          style={{ backgroundColor: element.color, margin: 1 }}
          onPress={()=>setScoreDisplay(element.score)}
        >
          {element.score}
        </Button>
      ))}
    </View>
    <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
    <Text variant="titleMedium">Mauvais service</Text>
    <Text variant="titleMedium">Excellent service</Text>
        </View>
    <View style={{ flexDirection: "row" }}>
      {assess.map((element) => (
        <Button
        key={element.score}
          mode="contained"
          style={{ backgroundColor: element.color, margin: 1 }}
          onPress={()=>setScoreDisplay(element.score)}
        >
          {element.score}
        </Button>
      ))}
    </View>
  </Card>
  );
};

export default CardScore;
