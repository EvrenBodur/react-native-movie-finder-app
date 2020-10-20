import React, { useEffect, useState } from "react";

import { Image, Text, View, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Card, Button } from "react-native-elements";

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
        <Text style={styles.text}>{item.title || item.name}</Text>
        <Text style={styles.text}>{item.vote_average}</Text>
        <Button title="Details" />
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
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    width: 300,
    height: 400,
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
  text: {
    flex: 1,
    color: "#4B4453",
  },
});
