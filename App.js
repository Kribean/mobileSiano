import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import LogInScreen from "./screens/LogInScreen";
import SignInScreen from "./screens/SignInScreen";
import {
  PaperProvider,
  ActivityIndicator,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { createContext } from 'react';
import { UserContextProvider } from './Context';

export const UserContext = createContext(null);

const Stack = createNativeStackNavigator();
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#426da5",    
    secondary: "#80bc36",
    warning: "#f0cf60",             
    accent: "#1dcdbc",
    error: "#e03e56",
    info: "#a7bfe6",
    background:"#ffffff",
    surfaceVariant:"#e6e6e6",
    surface:"#e6e6e6",
    secondaryContainer:"#e6e6e6",
    primaryContainer:"#e6e6e6",

  },
};

export default function App() {
  return (
<UserContextProvider>
<PaperProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Siano">
          <Stack.Screen name="Siano" component={CheckoutScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Se connecter" component={SignInScreen} />
          <Stack.Screen name="Connexion" component={LogInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
</UserContextProvider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
