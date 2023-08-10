import * as React from "react";
import { FlatList, View, StyleSheet, Linking } from "react-native";
import {
  Avatar,
  Card,
  IconButton,
  Text,
  Badge,
  Button,
} from "react-native-paper";

const AccueilRoute = ({ navigation }) => {
  const points = 15;
  const listBestComp = [
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

  const callCompany = (phoneNumber) => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl);
  };

  const sendEmail = (emailAddress) => {
    const emailUrl = `mailto:${emailAddress}`;
    Linking.openURL(emailUrl);
  };

  const sendToMap = (adress) => {
    const adressUrl = `https://www.google.com/maps/place/${adress}`;
    Linking.openURL(adressUrl);
  };

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
          renderItem={({ item }) => {
            return (
              <Card style={{ margin: 10 }} mode="contained">
                <Card.Title
                  title={"10/02/2022 " + item.title}
                  subtitle={item.subtitle}
                  left={(props) => <Avatar.Icon {...props} icon="calendar" />}
                />
              </Card>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={style.mainSection}>
        <Text variant="titleLarge">Proche de chez vous</Text>
        <FlatList
          data={listEvent}
          renderItem={({ item }) => {
            return (
              <Card style={{ margin: 5 }} mode="contained">
                <Badge>Fortement recommandée</Badge>
                <Card.Title
                  title={item.title}
                  subtitle={item.subtitle}
                  left={(props) => <Avatar.Icon {...props} icon="store" />}
                  right={(props) => <Text variant="displaySmall">3.5</Text>}
                />
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 5,
                  }}
                >
                  <Button
                    mode="text"
                    onPress={() =>
                      sendToMap("5 Rue Bertrand Panouse, 31170 Tournefeuille")
                    }
                  >
                    Adresse.
                  </Button>
                  <Button mode="text" onPress={() => callCompany("0645629957")}>
                    Tél.
                  </Button>
                  <Button
                    mode="text"
                    onPress={() => sendEmail("ramael.bruno@gmail.com")}
                  >
                    Mail.
                  </Button>
                </View>
              </Card>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={style.mainSection}>
        <Text variant="titleLarge">Meilleures entreprises</Text>
        <FlatList
          data={listEvent}
          renderItem={({ item }) => {
            return (
              <Card style={{ margin: 5 }} mode="contained">
                <Badge>Entreprise prometteuse</Badge>
                <Card.Title
                  title={item.title}
                  subtitle={item.subtitle}
                  left={(props) => <Avatar.Icon {...props} icon="store" />}
                  right={(props) => <Text variant="displaySmall">2.5</Text>}
                />
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 5,
                  }}
                >
                  <Button
                    mode="text"
                    onPress={() =>
                      sendToMap("5 Rue Bertrand Panouse, 31170 Tournefeuille")
                    }
                  >
                    Adresse.
                  </Button>
                  <Button mode="text" onPress={() => callCompany("0645629957")}>
                    Tél.
                  </Button>
                  <Button
                    mode="text"
                    onPress={() => sendEmail("ramael.bruno@gmail.com")}
                  >
                    Mail.
                  </Button>
                </View>
              </Card>
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
    margin: 20,
    paddingLeft: 20,
  },
  mainSection: {
    flex: 0.35,
    margin: 20,
    width: "100%",
    justifyContent: "end",
    paddingLeft: 20,
  },
});
export default AccueilRoute;
