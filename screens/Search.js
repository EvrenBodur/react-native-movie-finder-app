import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Image, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Search = ({ onChangeText, items }) => {
  const renderItem = ({ item }) => {
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
      <View style={styles.inputContainer}>
        <TextInput
          style={{ height: 40 }}
          onChangeText={(text) => onChangeText(text)}
          placeholder="Search.."
          backgroundColor="white"
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          initialNumToRender={5}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4B5863",
  },
  inputContainer: {
    width: "100%",
    height: 30,
  },
  listContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
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
  text: {
    flex: 1,
    color: "#4B4453",
  },
});
