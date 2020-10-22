import React from "react";
import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");
const itemWidth = width * 0.8;
const itemHeight = height * 0.6;

const Container = ({ movies, navigation }) => {
  const { movieCategories } = useSelector(
    (state) => state.movieCategoriesStore
  );
  const { tvSeriesCategories } = useSelector(
    (state) => state.tvSeriesCategoriesStore
  );

  const renderItem = ({ item }) => {
    const itemGenres = () => {
      if (item.title) {
        const genres = [];
        item.genre_ids.forEach((genreID) => {
          movieCategories.find((cat) => {
            cat.id === genreID && genres.push(cat.name);
          });
        });
        return genres.slice(0, 3).map((genre) => {
          return (
            <Text style={styles.genre} key={genre}>
              {genre}
            </Text>
          );
        });
      }

      if (item.name) {
        const genres = [];
        item.genre_ids.forEach((genreID) => {
          tvSeriesCategories.find((cat) => {
            cat.id === genreID && genres.push(cat.name);
          });
        });
        return genres.slice(0, 3).map((genre) => {
          return (
            <Text style={styles.genre} key={genre}>
              {genre}
            </Text>
          );
        });
      }
    };

    return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          resizeMode="stretch"
          source={{
            uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
          }}
        />
        <Text style={styles.textTitle}>{item.title || item.name}</Text>
        <Text style={styles.textRate}>{item.vote_average}/10</Text>
        <View style={styles.genres}>{itemGenres()}</View>
        <TouchableOpacity
          onPress={() => navigation.push("Details", { item })}
          style={styles.cardButton}
        >
          <Text style={styles.btnText}>Details..</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B5863",
    alignItems: "center",
    justifyContent: "center",
  },

  cardContainer: {
    flex: 1,
    alignItems: "center",
    width: itemWidth,
    minHeight: itemHeight,
    backgroundColor: "#D0D2DA",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 6,
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 10,
  },
  textTitle: {
    color: "#4B4453",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 5,
  },
  textRate: {
    color: "#4B4453",
    marginTop: 5,
  },
  cardButton: {
    marginTop: 5,
  },
  btnText: {
    color: "tomato",
  },
  genres: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 5,
  },
  genre: {
    color: "grey",
  },
});
