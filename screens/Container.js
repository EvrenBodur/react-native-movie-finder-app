import React, { useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

const Container = ({ movies }) => {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: `https://image.tmdb.org/t/p/w300${item.poster_path}`,
          }}
        />
        <Text style={styles.textTitle}>{item.title || item.name}</Text>
        <Text style={styles.textRate}>{item.vote_average}</Text>

        <TouchableOpacity style={styles.cardButton}>
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
    width: 300,
    minHeight: 400,
    backgroundColor: "whitesmoke",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  textTitle: {
    color: "#4B4453",
    fontSize: 16,
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
});
