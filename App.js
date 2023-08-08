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

const Stack = createNativeStackNavigator();
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#570df8",    
    secondary: "#f000b8",
    warning: "#fbbd23",             
    accent: "#1dcdbc",
    error: "#f87272",
    background:"#ffffff",
    surfaceVariant:"#e6e6e6",
    surface:"#e6e6e6",
    secondaryContainer:"#e6e6e6",
    primaryContainer:"#e6e6e6",
    surfaceDisabled:"red",
    inverseSurface:"red",
    inversePrimary:"red"

  },
};

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Checkout">
          <Stack.Screen name="Checkout" component={CheckoutScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="LogIn" component={LogInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
