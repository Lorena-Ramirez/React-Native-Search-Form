import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Results from "./screens/Results";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShow: false }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Results" component={Results} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
