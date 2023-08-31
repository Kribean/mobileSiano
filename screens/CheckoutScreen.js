import {useEffect, useState} from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button,Banner } from 'react-native-paper';
import InformationComponent from '../components/InformationComponent';
import { getNotification } from '../services/auth';

const CheckoutScreen = ({navigation}) => {

  const [visible, setVisible] = useState(false);
  const [notification, setNotification] = useState(true);

  useEffect(()=>{
    getNotification()
    .then((data)=>{
      if(data.ok)
      {
        return data.json();
      }
      throw new Error("pas de notification")
    })
    .then((data)=>{
      if(data.length>0)
      {setNotification(data[0]);
      setVisible(true)}
    })
    .catch((error)=>{console.log(error, "something wrong happen, tell us at caraibe.simulation@gmail.com")})
  },[])

  return (<View style={style.container}>

{visible&&<InformationComponent     
    typeOfNotification={"typeOfNotification"}
    title={notification.title}
    description={notification.description}
    appearUrl={notification.appearUrl}
    url={notification.url}
    setVisible={setVisible}
    />}

  <Image 
  resizeMode="contain"
  style={{width:320}} 
  source={require("../assets/siano-black.png")}/>
  <Button style={{margin:20}} mode="contained" onPress={() =>{navigation.navigate('Connexion')} }>
    Se connecter
  </Button>
  <Button  mode="contained" onPress={() =>{navigation.navigate('Se connecter')} }>
    S'inscrire
  </Button>
 </View>)}
;

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            width:'100%',
            alignItems: "center",
            justifyContent: "center",
            position:"relative"
          },
    }
)
export default CheckoutScreen;