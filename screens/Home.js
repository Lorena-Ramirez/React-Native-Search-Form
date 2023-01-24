import { React, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, TextInput, SafeAreaView, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";


import { useSelector, useDispatch } from 'react-redux'
import { updateName, updateCategoryId, showPrevious } from "../src/features/user/userSlice";
import { updateCategories } from "../src/features/categories/categorySlice";

import { useGetAllCategoriesQuery, useGetCategorizedAnimesQuery } from "../src/features/apiSlice";
import { SelectList } from 'react-native-dropdown-select-list'

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState(" ");

  const { data: allCategoriesData, error } = useGetAllCategoriesQuery();
  const allCategories = useSelector((state) => state.categories.value);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch()
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: ''
    }
  });

  useEffect(() => {
    if (allCategoriesData) {
      const results = allCategoriesData.data;
      getCatergories(results);
    }
  }, [allCategoriesData]);

  const getCatergories = (arr) => {
    const categoryResults = (arr.map(({ id, attributes }) => ({ key: id, value: attributes.title })));
    setCategories(categoryResults);
    dispatch(updateCategories(categoryResults));
    console.log("STORE SELECTOR: ", allCategories);
  }

  const onSubmit = (d) => {
    console.log("Data: ", d);
    dispatch(updateName(d));
    console.log("STORE: ", user)
    var index = allCategories.map((obj) => { return obj.value; }).indexOf(`${d.category}`);
    const id = allCategories[index].key;
    dispatch(updateCategoryId(id));
    console.log("HOME ID!!!!!!: ", id);
    const allInfo = { ...d, categoryId: id };
    console.log(allInfo);
    navigation.navigate("Results", allInfo);


  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}> Welcome Weeb!</Text>
      <Text style={styles.baseText}>Fill it out so we can help!... Go on :)</Text>
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
      <Text style={styles.label}>What are you in the mood for?</Text>
      <Controller
        style={styles.input}
        name="category"
        control={control}
        render={({ field: { onChange, value } }) => (
          <SelectList
            setSelected={value => onChange(value)}
            data={categories}
            value={value}
            save="value"
            boxStyles={{ borderRadius: 4, backgroundColor: 'white', width: 250 }}
            dropdownStyles={{ backgroundColor: 'white' }}
          />

        )}
      />

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color='white'
          title="Submit"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color='white'
          title="Previous Results"
          onPress={() => navigation.navigate("Results", user)}
        />
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
  label: {
    marginTop: 20,
    fontFamily: 'Avenir-Book',
    fontSize: 15,
    paddingLeft: 14
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    width: 250,
    padding: 10,
    borderRadius: 4,
  },
  button: {
    marginTop: 15,
    color: 'white',
    height: 40,
    width: 250,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  baseText: {
    fontFamily: 'Avenir-Book',
    fontSize: 15,
    paddingLeft: 14

  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Arial Rounded MT Bold',
  }
});

