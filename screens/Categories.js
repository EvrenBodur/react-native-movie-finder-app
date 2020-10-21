import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";
import Container from "./Container";

const Categories = ({
  categories,
  selectedValue,
  setSelectedValue,
  movies,
}) => {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 40, width: "100%", color: "white" }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
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

      <Container movies={movies} />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    backgroundColor: "#4B5863",
  },
});
