import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';


const CheckoutScreen = ({navigation}) => (
  <View style={style.container}>
  <Image 
  resizeMode="contain"
  style={{width:320}} 
  source={require("../assets/siano-black.png")}/>
  <Button style={{margin:20}} mode="contained" onPress={() =>{navigation.navigate('SignIn')} }>
    Se connecter
  </Button>
  <Button  mode="contained" onPress={() =>{navigation.navigate('SignIn')} }>
    S'inscrire
  </Button>
 </View>
);

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            width:'100%',
            alignItems: "center",
            justifyContent: "center",
          },
    }
)
export default CheckoutScreen;