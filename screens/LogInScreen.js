import * as React from 'react';
import { Image,View,StyleSheet } from 'react-native';
import { Button,TextInput } from 'react-native-paper';
import { useState,useContext } from 'react';
import { logToAccount } from '../services/auth';
import { UserContext } from '../Context';

const CheckoutScreen = ({navigation}) => {
  const { user,setUser } = useContext(UserContext);
  const [phoneNumber,setPhoneNumber]=useState("");
  const [yearOfBirth,setYearOfBirth]=useState("");
  const [errorAlert, setErrorAlert] = useState(false);

  const filterNonNumeric = (input) => {
    return input.replace(/\D/g, "");
  };

  const handleNumberChange = (event, funcSet) => {
    const numericValue = filterNonNumeric(event);
    funcSet(numericValue);
  };

  const logAndGoToHome = ()=>{
    if(phoneNumber.length==10&&yearOfBirth.length==4)
    {
     const body={phoneNumber,yearOfBirth};
     logToAccount(body)
     .then((data)=>{
      if(data.ok)
      {
        return data.json();
      };
      throw new Error ("not succeed to get user")
     })
     .then((data)=>{
      console.log(data);
      setUser(data);
      navigation.navigate("Home")
     })
     .catch((error)=>{

      console.log("error: ",error)
     })

    
    }
  }

  return(
    <View style={style.container}>
      {errorAlert&&<AlertSignInComponent     
    typeOfNotification={"typeOfNotification"}
    title={"Oops!"}
    description={"Nous n'avons pas trouvé votre compte. Avez-vous créé un compte avec ce numéro de téléphone? Sinon inscrivez vous d'abord. N'hésitez pas à nous le mentionner en cliquant sur le bouton ci-dessous si vous pensez qu'il y a un problème."}
    setErrorAlert={setErrorAlert}
    />}
    <Image 
    resizeMode="contain"
    style={{width:320}} 
    source={require("../assets/siano-black.png")}/>
      <TextInput
        label="Numéro de téléphone"
        mode="outlined"
        maxLength={10}
        style={{width:200,margin:20}}
        value={phoneNumber}
        onChangeText={text => {handleNumberChange(text, setPhoneNumber)}}
      />
          <TextInput
          mode="outlined"
        label="Année de naissance"
        maxLength={4}
        style={{width:200}}
        value={yearOfBirth}
        onChangeText={text => {handleNumberChange(text, setYearOfBirth)}}
      />
  <View style={{justifyContent:"end",padding:20}}>
  <Button mode="contained" onPress={logAndGoToHome}>
      Valider
    </Button>
  </View>
   </View>
  )
}

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