import * as React from 'react';
import { Image, View, StyleSheet,Linking } from 'react-native';
import { Button,Banner,Text,useTheme } from 'react-native-paper';


const InformationComponent = (props) => {
const textButton = "nouvelle version"
const theme = useTheme();

  return (<View style={{width:"100%",position:"relative",top:0,padding:20,flexDirection:"column", backgroundColor:theme.colors.info}}>
<Text variant="titleMedium">{props.title}</Text>
<Text variant="bodyMedium">{props.description} </Text>
<View style={{flexDirection:"row",justifyContent:"flex-end",margin:20}}>
{props.appearUrl&&<Button onPressIn={()=>{Linking.openURL(props.url);}} style={{marginRight:20}} mode="contained" onPress={() => console.log('Pressed')}>
    Cliquer
  </Button>}
  <Button buttonColor={theme.colors.error} mode="contained" onPress={() => props.setVisible(false)}>
    Fermer
  </Button>
</View>
 </View>)}
;

export default InformationComponent;