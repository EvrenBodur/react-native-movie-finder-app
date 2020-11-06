import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./Details";
import Container from "./Container";

const Stack = createStackNavigator();

const Search = ({ onChangeText, items, navigation, value }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        children={() => (
          <View style={styles.container}>
            <View style={styles.inputContainer}>
              <TextInput
                value={value}
                backgroundColor="#4B5863"
                style={{
                  height: 40,
                  backgroundColor: "#4B5863",
                  color: "white",
                  paddingHorizontal: 5,
                }}
                onChangeText={(text) => onChangeText(text)}
                placeholder="Search.."
                backgroundColor="whitesmoke"
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
    backgroundColor: "#18171A",
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
