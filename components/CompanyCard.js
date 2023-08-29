import React from 'react';
import { Card, Badge, Title, Paragraph,useTheme,Button } from 'react-native-paper';
import { View,Linking } from 'react-native';

const CompanyCard = ({ company }) => {
    const theme = useTheme();
    const callCompany = (phoneNumber) => {
        const phoneUrl = `tel:${phoneNumber}`;
        Linking.openURL(phoneUrl);
      };
    
      const sendEmail = (emailAddress) => {
        const emailUrl = `mailto:${emailAddress}`;
        Linking.openURL(emailUrl);
      };
    
      const sendToMap = (adress) => {
        const adressUrl = `https://www.google.com/maps/place/${adress}`;
        Linking.openURL(adressUrl);
      };

      const sendToWebsite = (adress) => {
      if(adress.length>4)
        {  const adressUrl = `${adress}`;
        Linking.openURL(adressUrl);}
      };
    


  return (
    <Card style={{ width: '100%', maxWidth: 320, elevation: 8,margin:20 }}>
      <Card.Cover
        source={require('../assets/caribean-tribe.png')}
        resizeMode="cover"
        style={{ height: 70 }}
      />
      <Card.Content style={{marginTop:20}}>
        {company.label === "A+"&&<Badge size={20}>
          Excellente entreprise
        </Badge>}
        {company.label === "A"&&<Badge size={20}>
          Entreprise fortement recommandée
        </Badge>}
        {company.label === "B"&&<Badge size={20}>
          Entreprise bien vue
        </Badge>}
        {company.label === "C"&&<Badge size={20}>
          Entreprise prometteuse
        </Badge>}
        <Title style={{ fontSize: 24, fontWeight: 'bold' }}>
          Nom: {company.companyName}
        </Title>
      </Card.Content>
      <Card.Content>
        <Title>Produit:</Title>
{company.listOfProduct?.length>0&&<View style={{flexDirection:"row"}}>
{company.listOfProduct.map((element, index) => (
          <Badge key={index} style={{ margin: 2,backgroundColor:theme.colors.accent }}>
            {element}
          </Badge>
        ))}
</View>}
        <Paragraph style={{ marginTop: 8 }}>
          Description: {company.description}
        </Paragraph>
<View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
<Button buttonColor={theme.colors.accent}
        style={{margin:5,width:100}}
                    mode="text"
                    onPress={() =>
                      sendToMap(company.adress)
                    }
                  >
                    Adresse
                  </Button>
        <Button buttonColor={theme.colors.accent}
        style={{margin:5,width:100}}
        mode="text" onPress={() => callCompany(company.phoneNumber)}>
                    Téléphone
                  </Button>
        <Button buttonColor={theme.colors.accent}
        style={{margin:5,width:100}}
                    mode="text"
                    onPress={() => sendEmail(company.email)}
                  >
                    Mail.
                  </Button>

                  <Button
                  style={{margin:5,width:100}}
                    mode="text"
                    onPress={() => sendToWebsite(company.websiteCompany)}
                  >
                    {company.websiteCompany?.length>4?"Site web":"Pas de site web"}
                  </Button>
</View>
      </Card.Content>
    </Card>
  );
};

export default CompanyCard;
