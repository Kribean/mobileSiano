import {useContext} from "react";
import { FlatList, View, StyleSheet, Linking } from "react-native";
import {
  Avatar,
  Card,
  IconButton,
  Text,
  Badge,
  Button,
} from "react-native-paper";
import { UserContext } from "../Context";
import CompanyCard from "./CompanyCard";

const AccueilRoute = ({ navigation }) => {

  const {user} = useContext(UserContext);
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

  const listEvent =  [
    {
      companyName: 'Entreprise A',
      label: 'A+',
      listOfProduct: ['Produit A', 'Produit B', 'Produit C'],
      description: 'Description de l\'entreprise A swflmkjs fmsjkgms gsqgfksfgkq gqsfmjgq gsqmf gqsmfdgmqs fdmkgqkmgjfqj',
      adress: 'Adresse de l\'entreprise A',
      phoneNumber: '123-456-7890',
      email: 'entrepriseA@example.com',
    },
    {
      companyName: 'Entreprise B',
      label: 'A',
      listOfProduct: ['Produit X', 'Produit Y'],
      description: 'Description de l\'entreprise B',
      adress: 'Adresse de l\'entreprise B',
      phoneNumber: '987-654-3210',
      email: 'entrepriseB@example.com',
    },
    // ... Ajoutez d'autres objets d'entreprise ici
  ];
  
  return (
    <View style={style.container}>
      <View style={style.scoreSection}>
        <Text variant="titleMedium">Points acquis grâce à vos actes citoyens : {user?.pointsConsumer} </Text>
        <Avatar.Icon size={24} icon="database" />
      </View>

      <View style={style.mainSection}>
        <Text variant="titleMedium" style={{fontWeight:"bold"}}>Proche de chez vous</Text>
        <FlatList
          data={listEvent}
          renderItem={({ item }) => {
            return (
<CompanyCard company={item}/>
            );
          }}
          keyExtractor={(item) => item._id}
        />
      </View>

      <View style={style.mainSection}>
        <Text variant="titleMedium" style={{fontWeight:"bold"}}>Meilleures entreprises</Text>
        <FlatList
          data={listEvent}
          renderItem={({ item }) => {
            return (
<CompanyCard company={item}/>
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
  mainSection: {
    flex: 0.475,
    margin: 20,
    width: "100%",
    justifyContent: "end",
    paddingLeft: 20,
  },
});
export default AccueilRoute;
