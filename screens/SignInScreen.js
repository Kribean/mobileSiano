import { useEffect, useState } from "react";
import { Image, View, StyleSheet, FlatList } from "react-native";
import {
  Button,
  TextInput,
  Text,
  Portal,
  Modal,
  Chip,
} from "react-native-paper";

const SignInScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const [validateForm, setValidateForm] = useState(false);
  const [tabOfThematics, setTabOfThematics] = useState([]);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  useEffect(() => {
    if (tabOfThematics.length > 0) {
      setValidateForm(true);
    }
  }, [tabOfThematics]);
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
    if (!tabOfThematics.includes(theme)) {
      setTabOfThematics([...tabOfThematics, theme]);
    }
  };

  const removeThematic = (theme) => {
    if (tabOfThematics.length > 0) {
      const tab = tabOfThematics.filter((element) => !(element == theme));
      setTabOfThematics(tab);
    }
  };
  return (

      <View style={style.container}>

              <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <FlatList
            style={{ height: 500 }}
            data={dataTheme}
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
        
          <Image
            resizeMode="contain"
            style={{ width: 320 }}
            source={require("../assets/siano-black.png")}
          />
          <TextInput
            mode="outlined"
            label="Prénom"
            style={{ width: 200, margin: 10 }}
            value={""}
            onChangeText={(text) => {}}
          />
          <TextInput
            mode="outlined"
            label="Numéro de téléphone"
            style={{ width: 200, margin: 10 }}
            value={""}
            onChangeText={() => {}}
          />
          <TextInput
            mode="outlined"
            label="Année de naissance"
            style={{ width: 200, margin: 10 }}
            value={""}
            onChangeText={(text) => {}}
          />
                    <TextInput
            mode="outlined"
            label="Email"
            style={{ width: 200, margin: 10 }}
            value={""}
            onChangeText={(text) => {}}
          />
          <Text>Quelle(s) type(s) d'entreprises peuvent me contacter?</Text>
          <Button
            icon="store"
            mode="contained"
            style={{ margin: 20, width: 200 }}
            onPress={showModal}
          >
            Ajouter catégorie(s)
          </Button>

<View style={{height:80,marginBottom:20}}>
<FlatList
            horizontal={true}
            data={tabOfThematics}
            renderItem={({ item }) => (
              <Chip
                style={{ height: 40, margin: 10 }}
                closeIcon="close"
                onClose={() => removeThematic(item)}
              >
                {item}
              </Chip>
            )}
            keyExtractor={(item, index) => index}
          />
</View>

          {validateForm && (
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Home")}
            >
              Valider
            </Button>
          )}

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
});
export default SignInScreen;
