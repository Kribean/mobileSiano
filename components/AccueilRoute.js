import {useContext, useEffect, useState} from "react";
import { FlatList, View, StyleSheet} from "react-native";
import {
  Avatar,
  Text,
  useTheme
} from "react-native-paper";
import { UserContext } from "../Context";
import CompanyCard from "./CompanyCard";
import { getTenUpgradeCompanies,getAllCompanies } from "../services/auth";

const AccueilRoute = ({ navigation }) => {

  const theme=useTheme();
  const {user} = useContext(UserContext);

  const [listBestComp,setListBestComp] = useState([]);

  const [listCompaniesAround,setListCompaniesAround] = useState([]);

  useEffect(()=>{
getTenUpgradeCompanies()
.then((data)=>{
  if(data.ok)
  {
    return data.json();
  }
  throw new Error("cannot get best companies");

})
.then((data)=>{ setListBestComp(data)})
.catch((error)=>{console.log("error: ",error)})

const endpoint=`?postalCode=${user?.postalCode?user?.postalCode:""}`;

getAllCompanies(endpoint).then((data)=>{
  if(data.ok)
  {
    return data.json();
  }
  throw new Error("cannot get best companies");

})
.then((data)=>{ setListCompaniesAround(data)})
.catch((error)=>{console.log("error: ",error)})

  },[])
  
  return (
    <View style={style.container}>
      <View style={style.scoreSection}>
        <Text variant="titleMedium">Points acquis grâce à vos actes citoyens :</Text> 
        <Text variant="titleMedium" style={{fontWeight:"bold"}}>{user?.pointsConsumer}</Text> 
        <Avatar.Icon style={{backgroundColor:theme.colors.accent}} size={24} icon="star" />
      </View>

      <View style={style.mainSection}>
        <Text variant="titleMedium" style={{fontWeight:"bold"}}>Proche de chez vous</Text>
       {listCompaniesAround.length>0? <FlatList
          data={listCompaniesAround}
          renderItem={({ item }) => {
            return (
<CompanyCard  company={item}/>
            );
          }}
          keyExtractor={(item) => item._id}
        />:
        <Text variant="titleMedium" style={{fontWeight:"bold"}}>Nous n'avons pas encore d'entreprises dans votre région. 😉</Text>
        }
      </View>

      <View style={style.mainSection}>
        <Text variant="titleMedium" style={{fontWeight:"bold"}}>Meilleures entreprises</Text>
        {listBestComp.length>0 ?<FlatList
          data={listBestComp}
          renderItem={({ item }) => {
            return (
<CompanyCard  company={item}/>
            );
          }}
          keyExtractor={(item) => item._id}
        />:
        <Text variant="titleMedium" style={{fontWeight:"bold"}}>Nous n'avons pas encore d'entreprises dans votre région. 😉</Text>
        }
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  scoreSection: {
    flex: 0.05,
    width: "100%",
    justifyContent: "flex-end",
    alignItems:"center",
    paddingRight: 10,
    flexDirection: "row",
  },
  mainSection: {
    flex: 0.475,
    margin: 20,
    width: "100%",
    justifyContent: "end",
    paddingLeft: 20,
  },
});
export default AccueilRoute;
