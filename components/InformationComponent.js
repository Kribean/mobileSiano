import * as React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { Button,Banner,Text,useTheme } from 'react-native-paper';


const InformationComponent = ({setVisible}) => {
const textButton = "nouvelle version"
const theme = useTheme();

  return (<View style={{width:"100%",position:"relative",top:0,padding:20,flexDirection:"column", backgroundColor:theme.colors.info}}>
<Text variant="titleMedium">Kouté sa!</Text>
<Text variant="bodyMedium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
<View style={{flexDirection:"row",justifyContent:"flex-end",margin:20}}>
<Button style={{marginRight:20}} mode="contained" onPress={() => console.log('Pressed')}>
    {textButton}
  </Button>
  <Button buttonColor={theme.colors.error} mode="contained" onPress={() => setVisible(false)}>
    Fermer
  </Button>
</View>
 </View>)}
;

export default InformationComponent;