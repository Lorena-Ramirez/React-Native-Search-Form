import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TextInput, SafeAreaView, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

const Home = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: ''
    }
  });

  const [name, setName] = useState({ firstName: "Lisa" });

  const onSubmit = (data) => {
    console.log("Data: ", data);
    navigation.navigate("Results", data);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.label}>First name</Text>
        <Controller
          name="firstName"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
        />
        <View style={styles.button}>
          <Button
            style={styles.buttonInner}
            color
            title="Submit"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.buttonInner}
            color
            title="See Previous Results"
            onPress={() => navigation.navigate("Results", name)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE4E1",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    width: 300,
    padding: 10,
    borderRadius: 4,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  }
});
