import * as React from 'react';
import { Image, View, StyleSheet,Linking } from 'react-native';
import { Button,Banner,Text,useTheme } from 'react-native-paper';


const AlertSignInComponent = (props) => {
const theme = useTheme();

  return (<View style={{position:"absolute",top:0,zIndex:99,width:"100%",padding:20,flexDirection:"column", backgroundColor:theme.colors.warning}}>
<Text variant="titleMedium">{props.title}</Text>
<Text variant="bodyMedium">{props.description} </Text>
<View style={{flexDirection:"column",justifyContent:"flex-end",padding:20}}>
<Button style={{margin:20}} buttonColor={theme.colors.error} onPressIn={()=>{Linking.openURL(`mailto:caraibe.simulation@gmail.com`)}}  mode="contained">
    Nous alerter par mail
  </Button>
<Button style={{margin:20}} buttonColor={theme.colors.error} onPressIn={()=>{Linking.openURL(`sms:0645629957`)}}  mode="contained">
    Nous alerter par téléphone
  </Button>
  <Button buttonColor={theme.colors.accent} mode="contained" onPress={() => props.setErrorAlert(false)}>
    Fermer
  </Button>
</View>
 </View>)}
;

export default AlertSignInComponent;