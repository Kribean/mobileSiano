import {useState,useContext} from "react";
import { FlatList, View, StyleSheet,ScrollView } from "react-native";
import {
  Button,
  TextInput,
  Text,
  Portal,
  Modal,
  Chip,
  Switch,
  useTheme
} from "react-native-paper";
import { UserContext } from "../Context";
import { modifyAccount } from "../services/auth";
import AlertSignInComponent from "./AlertSignInComponent";

const ProfilRoute = ({ navigation }) => {

  const theme = useTheme();

  const {user} = useContext(UserContext);

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const [visible, setVisible] = useState(false);

  const [listOfThematics, setListOfThematics] = useState(user.listOfThematics);
  const [postalCode, setPostalCode] = useState(user.postalCode);
  const [userName,setUserName] =useState(user.userName);
  const [email,setEmail] =useState(user.email);
  const [errorAlert,setErrorAlert] =useState(false);

  const onToggleSwitch = () => {

    return setIsSwitchOn(!isSwitchOn);
    };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

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

  const modifyMyAccount = () => {
    if (
      postalCode.length > 1 &&
      listOfThematics.length > 0
    ) {
      const body = {
        userName,
        postalCode,
        listOfThematics,
        beVisible:isSwitchOn
      };
      modifyAccount(body,user.token)
        .then((data) => {
            return navigation.navigate("Connexion");
        })
        .catch((error) => {
          setErrorAlert(true);
        });
      //
    }
  };

  const deleteMyAccount =()=>{

  }

  return (

    <View style={style.container}>
      <ScrollView contentContainerStyle={{justifyContent:"center"}} style={style.scrollView}>
      {errorAlert && (
        <AlertSignInComponent
          typeOfNotification={"typeOfNotification"}
          title={"Oops!"}
          description={
            "Il y' a un problème pour modifier le compte, tentez une nouvelle fois et n'hésitez pas à nous le mentionner en cliquant sur le bouton ci-dessous si vous pensez qu'il y a un problème."
          }
          setErrorAlert={setErrorAlert}
        />
      )}
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
      
                <View style={{ width:"100%", flexDirection: "row", justifyContent: "flex-end" }}>
{ isSwitchOn?           <Text style={{fontWeight:"bold"}} variant="labelMedium">
              Je suis visible des entreprises
            </Text>:
            <Text style={{fontWeight:"bold"}} variant="labelMedium">
            Je ne suis pas visible des entreprises
          </Text>}
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
            <TextInput
        mode="outlined"
        label="Prénom"
        maxLength={20}
        style={{ width: 200, margin: 10 }}
        value={userName}
        onChangeText={(event) => {
          setUserName(event);
        }}
      />
                  <TextInput
        mode="outlined"
        label="email"
        maxLength={20}
        style={{ width: 200, margin: 10 }}
        value={email}
        onChangeText={(event) => {
          setEmail(event);
        }}
      />
      <TextInput
        mode="outlined"
        label="Code Postal"
        maxLength={9}
        style={{ width: 200, margin: 10 }}
        value={postalCode}
        onChangeText={(text) => {
          handleNumberChange(text, setPostalCode);
        }}
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
      <View style={{ width:"100%", flexDirection: "column" }}>


        {listOfThematics.map((item,index)=>{console.log(item,'kayaj');return         (<Chip
              style={{ height: 40, margin: 10,backgroundColor:theme.colors.accent }}
              closeIcon="close"
              onClose={() => removeThematic(item)}
              key={index+item}
            >
              {item}
            </Chip>)})}
      </View>
      <View style={{flexDirection:"column", width:"100%"}}>

      <TextInput
        mode="outlined"
        label="Numéro de téléphone"
        maxLength={10}
        style={{ width: 200, margin: 10 }}
        disabled
        value={user.phoneNumber}
      />
      <TextInput
        mode="outlined"
        label="Année de naissance"
        maxLength={4}
        style={{ width: 200, margin: 10 }}
        value={user.yearOfBirth}
        disabled

      />
    
        <Button style={{backgroundColor:theme.colors.info}} mode="contained" onPress={modifyMyAccount}>
          Modifier et me reconnecter
        </Button>
        <Button style={{backgroundColor:theme.colors.error,marginVertical:20}} mode="contained" onPress={deleteMyAccount}>
          Supprimer mon compte
        </Button>
      </View>

      
</ScrollView>
    </View>)
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
  scrollView: {
    paddingHorizontal: 10,
  },
});
export default ProfilRoute;
