import { StatusBar } from "expo-status-bar";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
