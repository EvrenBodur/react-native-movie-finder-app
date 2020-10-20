import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { Picker } from "@react-native-community/picker";
import { FlatList } from "react-native-gesture-handler";

const Categories = ({
  categories,
  selectedValue,
  setSelectedValue,
  movies,
}) => {
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
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: "100%", color: "white" }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {categories.map((category) => {
          return (
            <Picker.Item
              label={category.name}
              value={category.id}
              key={category.name}
            />
          );
        })}
      </Picker>
      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    backgroundColor: "#4B5863",
  },
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
