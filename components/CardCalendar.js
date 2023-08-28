import * as React from 'react';
import { Avatar, Card, Text } from "react-native-paper";

const CardCalendar = (props)=>{
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
      }
return(
    <Card style={{ margin: 10 }} mode="contained">
      <Card.Title
        title={`Titre: ${props.title}`}
        left={(cardProps) => <Avatar.Icon {...cardProps} icon="calendar" />}
      />
      <Card.Content>
      <Text variant="bodyLarge" style={{ fontWeight: 'bold' }}>
      Date: {formatDate(props.startAt)}</Text>
      <Text variant="bodyLarge" style={{ fontWeight: 'bold' }}>Durée de l'événement (en heure): </Text>
          <Text>{props.duration} h</Text>
        <Text variant="bodyLarge" style={{ fontWeight: 'bold' }}>Entreprise: {props.companyName}</Text>

        <Text variant="bodyLarge" style={{ fontWeight: 'bold' }}>Catégorie: </Text>
        <Text>{props.categoryText}</Text>  

        <Text variant="bodyLarge" style={{ fontWeight: 'bold' }}>Prix: </Text>
        <Text>{props.price} &euro;</Text>  
        <Text variant="bodyLarge" style={{ fontWeight: 'bold' }}>Lieu: </Text>
        <Text>{props.place}</Text>  
        
          <Text variant="bodyLarge" style={{ fontWeight: 'bold' }}>Description: </Text>
          <Text>{props.description}</Text>  
        <Text style={{ fontWeight: 'bold' }}>Nous contacter</Text>
        <Text variant="bodyLarge">Email: {props.emailContact}</Text>
        <Text variant="bodyLarge">Téléphone: {props.phoneContact}</Text>
      </Card.Content>
    </Card>
)
};

export default CardCalendar