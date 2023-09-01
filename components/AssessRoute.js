import { useContext, useEffect, useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import CardScore from "./CardScore";
import { getAllScores } from "../services/auth";
import { UserContext } from "../Context";

const CompanyRoute = ({ navigation }) => {
  const { user } = useContext(UserContext);
  const [listScoresNotAssessYet, setListScoresNotAssessYet] = useState([]);

  /* const onToggleSwitch = () => {

    if(!isSwitchOn)
    {

    }else{

    }
    return setIsSwitchOn(!isSwitchOn);
    };*/

  useEffect(() => {
    if (user.token) {
      getAllScores(user.token)
        .then((data) => {
          if (data.ok) {
            return data.json();
          }
          throw new Error("cannot get errors");
        })
        .then((data) => {
          setListScoresNotAssessYet(
            data.filter((element) => !element.alreadyAssess)
          );
        })
        .catch((error) => console.log("error : ", error));
    }
  }, []);

  return (
    <View style={style.container}>
      <Text variant="titleLarge">
        Evaluer les entreprises qui m'ont contacté et gagner 1 point
      </Text>
      {/**    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <Text variant="labelMedium">
            "Réévaluez en cliquant ici !
            </Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
  </View>*/}
      <View style={style.mainSection}>
      {listScoresNotAssessYet.length==0&&<Text style={{margin:30}} variant="titleLarge">😀Bel bonjou! Vous n'avez pas d'évaluations à faire </Text>}
        <FlatList
          data={listScoresNotAssessYet}
          renderItem={({ item }) => {
            return (
              <CardScore
                item={item}
                listScoresNotAssessYet={listScoresNotAssessYet}
                setListScoresNotAssessYet={setListScoresNotAssessYet}
              />
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
export default CompanyRoute;