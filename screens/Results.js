import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, Platform, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import { useSelector } from "react-redux";
import AnimeCard from "../src/components/AnimeCard";
import { useGetCategorizedAnimesQuery } from "../src/features/apiSlice";
import { updateAnimeHistory } from "../src/features/user/userSlice";

const Results = ({ route }) => {
  const navigation = useNavigation();
  const [animeResults, setAnimeResults] = useState([
    {
      title: "Anime1",
      img: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      synopsis: "This is the description!"
    },
    {
      title: "Anime2",
      img: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      synopsis: "This is the description!"
    },
    {
      title: "Anime3",
      img: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      synopsis: "This is the description!"
    }]);
  const { firstName, categoryId } = route.params;
  const { data: categorizedAnime, isLoading } = useGetCategorizedAnimesQuery(`${categoryId}`);
  // if (isLoading) return <Text> Loading...</Text>;


  useEffect(() => {

    console.log("STORE ID!: ", categoryId);
    if (categorizedAnime) {
      const dataArray = categorizedAnime.data;
      getTitles(dataArray);
    }

  }, [categorizedAnime]);

  const getTitles = (arr) => {
    const titles = (arr.map(({ id, attributes }) => ({ title: attributes.titles.en_jp, synopsis: attributes.synopsis, img: attributes.posterImage.small })));
    console.log("TITLES: ", titles);
    setAnimeResults(titles);

  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}> Welcome {firstName} </Text>
      <Text style={styles.baseText}>Here's what we've found</Text>
      <FlatList
        data={animeResults}
        renderItem={({ item }, i) => (
          <AnimeCard
            title={item.title}
            image={item.img}
            synopsis={item.synopsis}
          />
        )}
      />

    </SafeAreaView>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE4E1",
    alignItems: "center",
    justifyContent: "center",
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
  },
});