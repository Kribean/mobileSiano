import {useEffect, useState} from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { getAllEvents } from "../services/auth";
import CardCalendar from "./CardCalendar";
import { Text } from "react-native-paper";

const CalendarRoute = ({ navigation }) => {

const [listEvent,setListEvent ]  = useState([]);


useEffect(()=> {
getAllEvents()
.then((data)=>{
  if(data.ok)
  {
    return data.json();
  }
  throw new Error("cannot take events")
})
.then((data)=>{
  setListEvent(data)
})
.catch((error)=>{console.log("error: ",error)})
},[])

  return (
    <View style={style.container}>
      <Text variant="titleLarge">Evènements</Text>
      <View style={style.mainSection}>
        <FlatList
          data={listEvent}
          renderItem={({ item }) => {
            return (
<CardCalendar
	   title={item.title}
	   companyName={item.companyName}
	   duration={item.duration}
	   price={item.price}
	   place={item.place}
	   description={item.description}
	   emailContact={item.emailContact}
	   phoneContact={item.phoneContact}
     startAt={item.startAt}/>
            );
          }}
          keyExtractor={(item) => item._id}
        />
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
  mainSection: {
    flex: 0.8,
    margin: 20,
    width: "100%",
    justifyContent: "end",
    paddingLeft: 20,
  },
});
export default CalendarRoute;
