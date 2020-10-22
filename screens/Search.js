import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./Details";

import Container from "./Container";

const Stack = createStackNavigator();

const Search = ({ onChangeText, items, navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        children={() => (
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
              <Container movies={items} navigation={navigation} />
            </View>
          </View>
        )}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
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
});
