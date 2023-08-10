import * as React from 'react';
import { Image,View,StyleSheet } from 'react-native';
import { Button,TextInput } from 'react-native-paper';

const CheckoutScreen = ({navigation}) => (
  <View style={style.container}>
  <Image 
  resizeMode="contain"
  style={{width:320}} 
  source={require("../assets/siano-black.png")}/>
    <TextInput
      label="Numéro de téléphone"
      mode="outlined"
      style={{width:200,margin:20}}
      value={""}
      onChangeText={text => {}}
    />
        <TextInput
        mode="outlined"
      label="Année de naissance"
      style={{width:200}}
      value={""}
      onChangeText={text => {}}
    />
<View style={{justifyContent:"end",padding:20}}>
<Button mode="contained" onPress={() => navigation.navigate("Home")}>
    Valider
  </Button>
</View>
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