import React from "react";
import { View, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";
import Container from "./Container";
import Details from "./Details";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Categories = ({
  categories,
  selectedValue,
  setSelectedValue,
  movies,
  navigation,
}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        children={() => (
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

            <Container movies={movies} navigation={navigation} />
          </View>
        )}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Categories;

const styles = StyleSheet.create({
  pickerContainer: {
    flex: 1,
    backgroundColor: "#4B5863",
  },
});
