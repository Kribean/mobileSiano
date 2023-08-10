import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button,Banner } from 'react-native-paper';
import InformationComponent from '../components/InformationComponent';

const CheckoutScreen = ({navigation}) => {

  const [visible, setVisible] = React.useState(true);

  return (<View style={style.container}>

{visible&&<InformationComponent setVisible={setVisible}/>}

  <Image 
  resizeMode="contain"
  style={{width:320}} 
  source={require("../assets/siano-black.png")}/>
  <Button style={{margin:20}} mode="contained" onPress={() =>{navigation.navigate('LogIn')} }>
    Se connecter
  </Button>
  <Button  mode="contained" onPress={() =>{navigation.navigate('SignIn')} }>
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