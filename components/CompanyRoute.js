import { useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import {
  Text,
  Modal,
  Portal,
  Button,
  Chip,
  Switch,
  useTheme,
  Searchbar
} from "react-native-paper";
import { getAllCompanies } from "../services/auth";
import CompanyCard from "./CompanyCard";

const CompanyRoute = ({ navigation }) => {
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [textPlace, setTextPlace] = useState("");
  const [listCompanies,setListCompanies] = useState([]);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const showModal = () => setVisible(true);
  const containerStyle = { backgroundColor: "white", padding: 20 };
  const [listOfThematics, setListOfThematics] = useState([]);

  const hideModal = () => {setVisible(false)};

  useEffect(()=>{
    getAllCompanies("").then((data)=>{
      if(data.ok)
      {
        return data.json();
      }
      throw new Error("cannot get best companies");
    
    })
    .then((data)=>{ setListCompanies(data)})
    .catch((error)=>{console.log("error: ",error)})
  },[])

  const dataTheme = [
    {
      activity: "Activité sportive",
    },
    {
      activity: "Alimentation et quotidien",
    },
    {
      activity: "Automobile et transport",
    },
    {
      activity: "Agriculture et Pêche",
    },
    {
      activity: "Espaces naturels et Espaces verts",
    },
    {
      activity: "Soins aux animaux",
    },
    {
      activity: "Arts et Façonnage d'ouvrages d'art",
    },
    {
      activity: "Banque, Assurance, Immobilier",
    },
    {
      activity: "Commerce, Vente et Grande distribution",
    },
    {
      activity: "Beauté et Coiffure",
    },
    {
      activity: "Boulangerie et Patisserie",
    },
    {
      activity: "Communication, Média et Multimédia",
    },
    {
      activity: "Construction, Bâtiment et Travaux publics",
    },
    {
      activity: "Dépannage et installation",
    },
    {
      activity: "Enseignement",
    },
    {
      activity: "Hôtellerie-Restauration, Tourisme, Loisirs et Animation",
    },
    {
      activity: "Industrie",
    },
    {
      activity: "Installation et Maintenance",
    },
    {
      activity: "Logements",
    },
    {
      activity: "Santé et Bien être",
    },
    {
      activity: "Services",
    },
    {
      activity: "Services à la personne et à la collectivité",
    },
    {
      activity: "Spectacle",
    },
    {
      activity: "Support à l'entreprise",
    },
    {
      activity: "Transport et Logistique",
    },
  ];

  const addThematic = (theme) => {
    if (!listOfThematics.includes(theme)) {
      setListOfThematics([...listOfThematics, theme]);
    }
  };

  const removeThematic = (theme) => {
    if (listOfThematics.length > 0) {
      const tab = listOfThematics.filter((element) => !(element == theme));
      setListOfThematics(tab);
    }
  };

  const filterNonNumeric = (input) => {
    return input.replace(/\D/g, "");
  };

  const handleNumberChange = (event) => {
    const numericValue = filterNonNumeric(event);
    setTextPlace(numericValue);
  };


  return (
    <View style={style.container}>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View style={{ flexDirection: "row" }}>
            <Button
              buttonColor={theme.colors.error}
              style={{ width: 150 }}
              icon="close"
              mode="contained"
              onPress={hideModal}
            >
              Fermer
            </Button>
          </View>
          <FlatList
            style={{ height: 500 }}
            data={dataTheme.filter((element) => {
              return !listOfThematics.includes(element.activity);
            })}
            renderItem={({ item }) => (
              <Button
                style={{ margin: 5 }}
                mode="contained"
                onPress={() => addThematic(item.activity)}
              >
                {item.activity}
              </Button>
            )}
            keyExtractor={(item, index) => index}
          />
        </Modal>
      </Portal>
      <View style={style.firstSection}>
        <Text style={{ margin: 20 }} variant="titleLarge">
          Liste des entreprises
        </Text>
          <View
            style={{
              flexDirection: "column",
              marginHorizontal: 10,
            }}
          >
            <Searchbar
              placeholder="Code postal ou numéro de département"
              mode="flat"
              value={textPlace}
              onChangeText={(text) => {handleNumberChange(text)}}
            />
            <Button
              icon="store"
              mode="contained"
              style={{ margin: 20, width: 200 }}
              onPress={showModal}
            >
              Rechercher entreprise(s)
            </Button>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text variant="labelMedium">
              Afficher les Meilleures Entreprises
            </Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
        <FlatList
          horizontal={true}
          data={listOfThematics}
          renderItem={({ item }) => (
            <Chip
              style={{
                height: 40,
                margin: 10,
                backgroundColor: theme.colors.accent,
              }}
              closeIcon="close"
              onClose={() => removeThematic(item)}
            >
              {item}
            </Chip>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View style={style.mainSection}>
      <Text variant="titleMedium" style={{fontWeight:"bold"}}>Liste :</Text>
 <FlatList
          data={listCompanies}
          renderItem={({ item }) => {
            return (
<CompanyCard company={item}/>
            );
          }}
          keyExtractor={(item) => item._id}
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
    flex: 0.45,
    marginHorizontal: 20,
    width: "100%",
    justifyContent: "center",
    paddingLeft: 20,
  },
  firstSection: {
    flex: 0.55,
    width: "100%",
    justifyContent: "center",
  },
});
export default CompanyRoute;
