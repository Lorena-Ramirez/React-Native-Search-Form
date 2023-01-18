import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Results = ({ route }) => {
  const { firstName } = route.params;
  return (
    <SafeAreaView>
      <Text> Welcome {firstName} </Text>
      <Text>Here's what we've found</Text>
    </SafeAreaView>
  );
};

export default Results;
