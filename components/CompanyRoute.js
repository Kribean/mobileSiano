import * as React from "react";
import { FlatList, View, StyleSheet,Linking } from "react-native";
import { Avatar, Card, IconButton, Text,Modal, Portal,Button,Chip,Badge } from "react-native-paper";

const CompanyRoute = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [tabOfThematics, setTabOfThematics] = React.useState([]);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const listEvent = [{title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:1},
  {title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:2},
  {title:"toloman",subtitle:"toloman sé on antrepise ki lé mété an avant...",id:3}]

  const dataTheme = [
    {
      activity: "Activité sportive",
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
      activity: "Beauté et Bien être",
    },
    {
      activity: "Communication, Média et Multimédia",
    },
    {
      activity: "Construction, Bâtiment et Travaux publics",
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
      activity: "Santé",
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
    }
  ];

  const addThematic = (theme)=>{
    if(!(tabOfThematics.includes(theme)))
    {
      setTabOfThematics([...tabOfThematics,theme])
    }
  };

  const removeThematic = (theme)=>{
    if(tabOfThematics.length>0)
    {const tab = tabOfThematics.filter((element)=>!(element==theme));
    setTabOfThematics(tab)}
  }

  const callCompany = (phoneNumber)=>{
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.openURL(phoneUrl);
  }

  const sendEmail = (emailAddress) => {
    const emailUrl = `mailto:${emailAddress}`;
    Linking.openURL(emailUrl);
  };
  return (
    <View style={style.container}>
<Portal >
        <Modal  visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <FlatList
        style={{height:500}}
        data={dataTheme}
        renderItem={({item}) =>   <Button style={{margin:5}} mode="contained" onPress={()=>addThematic(item.activity)}>
        {item.activity}
      </Button>}
        keyExtractor={(item,index) => index}
      />
        </Modal>
      </Portal>
<View style={style.firstSection}>
<Text variant="titleLarge">Liste des entreprises</Text>
<Button icon="store" mode="contained" style={{margin: 20, width:200}} onPress={showModal}>
       Rechercher entreprise
      </Button>
      <FlatList
      horizontal={true}
        data={tabOfThematics}
        renderItem={({item}) =>  <Chip style={{height:40,margin:10}} closeIcon="close" onClose={() => removeThematic(item)}>{item}</Chip>}
        keyExtractor={(item,index) => index}
      />
</View>
      <View style={style.mainSection}>
        
        <FlatList
        data={listEvent}
        renderItem={({item}) => {
          return <Card style={{flex:0.5,margin:10}}  mode="contained">
            <Badge>Fortement recommandée</Badge>
          <Card.Title
              title={item.title}
              subtitle={"secteur d'activité"}
              left={(props) => <Avatar.Icon {...props} icon="store" />}

            />
                            <View
                  style={{
                    width: "100%",
                    flexDirection: "column",
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingBottom: 5,
                  }}
                >
                  <Text variant="labelMedium"  style={{ fontWeight: "bold" }} >
                    Description: 
                  </Text>
                  <Text variant="labelMedium">{item.subtitle}</Text>
                  <Text variant="labelMedium" style={{ fontWeight: "bold" }}>
                    Produit:
                  </Text>
                  <Text variant="labelMedium">confiture de mangue, confiture de goyave</Text>
<View style={{flexDirection:"column", marginTop:10}}>
                  <Button mode="text" onPress={() => callCompany('0645629957')} >Téléphone: 0656585</Button>
                  <Button mode="text" onPress={() => sendEmail('ramael.bruno@gmail.com')} >Mail: ramael.bruno@gmail.com</Button>
</View>
<View style={{flexDirection:"row"}}>
</View>
                </View>
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
    flex: 0.65,
    margin:20,
    width: "100%",
    justifyContent: "center",
    paddingLeft: 20,
  },
  firstSection: {
    flex: 0.35,
    width: "100%",
    justifyContent: "center",
  }
});
export default CompanyRoute;
