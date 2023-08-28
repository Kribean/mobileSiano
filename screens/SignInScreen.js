import { useEffect, useState } from "react";
import { Image, View, StyleSheet, FlatList } from "react-native";
import {
  Button,
  TextInput,
  Text,
  Portal,
  Modal,
  Chip,
  useTheme
} from "react-native-paper";
import AlertSignInComponent from "../components/AlertSignInComponent";
import { createAccount } from "../services/auth";


const SignInScreen = ({ navigation }) => {
  const theme = useTheme();

  const [visible, setVisible] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [validateForm, setValidateForm] = useState(false);

  const [listOfThematics, setListOfThematics] = useState([]);
  const [userName,setUserName] = useState("");
  const [phoneNumber,setPhoneNumber]=useState("");
  const [yearOfBirth,setYearOfBirth]=useState("");
  const [postalCode,setPostalCode]=useState("");

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  useEffect(() => {
    if (listOfThematics.length > 0) {
      setValidateForm(true);
    }
  }, [listOfThematics]);
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

  const handleNumberChange = (event, funcSet) => {
    const numericValue = filterNonNumeric(event);
    funcSet(numericValue);
  };

  const createMyAccount = () => {
    if (
      userName.length > 2 &&
      phoneNumber.length == 10 &&
      yearOfBirth.length == 4 &&
      postalCode.length > 1 &&
      listOfThematics.length>0 
    ) {
      const body = {userName,phoneNumber,yearOfBirth,postalCode,listOfThematics}
      createAccount(body)
      .then((data)=>{
        if(data.ok)
        {
          return navigation.navigate("Connexion");
        }
        setErrorAlert(true)
      })
      .catch((error)=>{setErrorAlert(true)})
      //
    }

    

  };

  return (

      <View style={style.container}>
{errorAlert&&<AlertSignInComponent     
    typeOfNotification={"typeOfNotification"}
    title={"Oops!"}
    description={"Il y' a un problème de connexion. Avez vous déjà créé un compte avec ce numéro de téléphone? N'hésitez pas à nous le mentionner en cliquant sur le bouton ci-dessous si vous pensez qu'il y a un problème."}
    setErrorAlert={setErrorAlert}
    />}
              <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <View style={{flexDirection:"row"}}>
          <Button buttonColor={theme.colors.error} style={{width:100}} icon="close" mode="contained" onPress={hideModal}>
    Fermer
  </Button>
          </View>
          <FlatList
            style={{ height: 500 }}
            data={dataTheme.filter((element)=>{return !listOfThematics.includes(element.activity)})}
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
            style={{ width: 100 }}
            source={require("../assets/siano-black.png")}
          />
          <TextInput
            mode="outlined"
            label="Prénom"
            maxLength={20}
            style={{ width: 200, margin: 10 }}
            value={userName}
            onChangeText={(event) => {setUserName(event)}}
          />
          <TextInput
            mode="outlined"
            label="Numéro de téléphone"
            maxLength={10}
            style={{ width: 200, margin: 10 }}
            value={phoneNumber}
            onChangeText={(text) => {handleNumberChange(text,setPhoneNumber)}}
          />
          <TextInput
            mode="outlined"
            label="Année de naissance"
            maxLength={4}
            style={{ width: 200, margin: 10 }}
            value={yearOfBirth}
            onChangeText={(text) => {handleNumberChange(text,setYearOfBirth)}}
          />
                    <TextInput
            mode="outlined"
            label="Code Postal"
            maxLength={9}
            style={{ width: 200, margin: 10 }}
            value={postalCode}
            onChangeText={(text) => {handleNumberChange(text,setPostalCode)}}
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
            data={listOfThematics}
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
              onPress={createMyAccount}
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
    position:"relative"
  },
});
export default SignInScreen;
