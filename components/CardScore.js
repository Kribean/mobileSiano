import { useState, useContext } from "react";
import { View } from "react-native";
import {
  Avatar,
  Card,
  Text,
  Button,
  TextInput,
  useTheme,
} from "react-native-paper";
import { updateScore } from "../services/auth";
import { UserContext } from "../Context";

const fruitImage = require("../assets/shopfruit.png");

const CardScore = ({ item, setListScoresNotAssessYet,listScoresNotAssessYet }) => {
  const theme = useTheme();
  const { user } = useContext(UserContext);
  const [qualityScore, setQualityScore] = useState();
  const [deliveryScore, setDeliveryScore] = useState();
  const [alreadyAssessQuality, setAlreadyAssessQuality] = useState(false);
  const [alreadyAssessDelivery, setAlreadyAssessDelivery] = useState(false);
  const [colorQuality, setColorQuality] = useState("gray");
  const [colorDelivery, setColorDelivery] = useState("gray");
  const [comment, setComment] = useState("");
  const assess = [
    { score: 1, color: "#d61915" },
    { score: 2, color: "#f59517" },
    { score: 3, color: "#cace1f" },
    { score: 4, color: "#76d167" },
    { score: 5, color: "#1ac5a8ff" },
  ];
  const validAssessment = () => {
    if (deliveryScore > 0 || qualityScore > 0) {

      const body = {
        deliveryScore,
        qualityScore,
        comment,
        alreadyAssessQuality,
        alreadyAssessDelivery,
        alreadyAssess: true,
      };
      updateScore(body, user.token, item.idCompany, item._id)
        .then((data) => {

            setListScoresNotAssessYet(
              listScoresNotAssessYet.filter(
                (element) => element._id != item._id
              )
            );

        })
        .catch((error) => console.log("error: ", error, "a mistake is done"));
    }
  };

  return (
    <Card style={{ margin: 10, padding: 10 }} mode="contained">
      <Card.Cover
        source={fruitImage}
        resizeMode="cover"
        style={{ height: 70 }}
      />
      <Text style={{ fontWeight: "bold" }} variant="titleMedium">
        {item.companyName}
      </Text>
      <Card.Title
        left={(props) => <Avatar.Icon {...props} icon="store" />}
        right={(props) => (
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                flexDirection: "row",
                marginVertical: 20,
                justifyContent: "flex-end",
              }}
            >
              <Text variant="labelMedium">Qualité du produit vendu: </Text>
              <Avatar.Text
                style={{ backgroundColor: colorQuality }}
                size={24}
                label={qualityScore}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 20,
                justifyContent: "flex-end",
              }}
            >
              <Text variant="labelMedium">Qualité du Service Rendu: </Text>
              <Avatar.Text
                style={{ backgroundColor: colorDelivery }}
                size={24}
                label={deliveryScore}
              />
            </View>
          </View>
        )}
      />
      {!alreadyAssessQuality ? (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text variant="titleMedium">Mauvais produit</Text>
          <Text variant="titleMedium">Excellent produit</Text>
        </View>
      ) : (
        <View style={{ flexDirection: "row", justifyContent: "center",margin:20 }}>
          <Text variant="titleMedium">
            🥳🎉Merci pouvez vous noter maintenant le service reçu ou cliquez
            sur valider pour nous envoyer votre évaluation
          </Text>
        </View>
      )}
      {!alreadyAssessQuality && (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {assess.map((element) => (
            <Button
              key={element.score}
              mode="contained"
              style={{ backgroundColor: element.color, margin: 0.5 }}
              onPress={() => {
                setQualityScore(element.score);
                setColorQuality(element.color);
                setAlreadyAssessQuality(true);
              }}
            >
              {element.score}
            </Button>
          ))}
        </View>
      )}
      {!alreadyAssessDelivery ? (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text variant="titleMedium">Mauvais service</Text>
          <Text variant="titleMedium">Excellent service</Text>
        </View>
      ) : (
        <View style={{ flexDirection: "row", justifyContent: "center",margin:20 }}>
          <Text variant="titleMedium">
            🥳🎉Merci pouvez vous noter maintenant le service reçu ou cliquez
            sur valider pour nous envoyer votre évaluation
          </Text>
        </View>
      )}
      {!alreadyAssessDelivery && (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          {assess.map((element) => (
            <Button
              key={element.score}
              mode="contained"
              style={{ backgroundColor: element.color, margin: 0.5 }}
              onPress={() => {
                setDeliveryScore(element.score);
                setColorDelivery(element.color);
                setAlreadyAssessDelivery(true);
              }}
            >
              {element.score}
            </Button>
          ))}
        </View>
      )}
      <TextInput
        label="Laisser un commentaire"
        multiline={true}
        numberOfLines={3}
        value={comment}
        onChangeText={(text) => setComment(text)}
      />
      {
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            margin: 20,
          }}
        >
          <Button
            style={{ marginRight: 10, backgroundColor: theme.colors.error }}
            icon="close"
            mode="contained"
            onPress={() => {
              setColorDelivery("gray");
              setColorQuality("gray");
              setDeliveryScore();
              setQualityScore();
              setAlreadyAssessQuality(false);
              setAlreadyAssessDelivery(false);
            }}
          >
            Annuler
          </Button>
          <Button
            style={{ backgroundColor: theme.colors.accent }}
            icon="check"
            mode="contained"
            onPress={validAssessment}
          >
            Valider
          </Button>
        </View>
      }
    </Card>
  );
};

export default CardScore;
