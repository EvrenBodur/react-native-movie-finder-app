import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./Details";
import Container from "./Container";
import { useFocusEffect } from "@react-navigation/native";
import { searchMovieCleaner } from "../src/actions/moviesActions";
import { useDispatch } from "react-redux";

const Stack = createStackNavigator();

const Search = ({ onChangeText, items, navigation, value }) => {
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      return () => dispatch(searchMovieCleaner());
    }, [navigation, dispatch])
  );

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
                style={{ height: 40 }}
                onChangeText={(text) => onChangeText(text)}
                placeholder="Search.."
                backgroundColor="whitesmoke"
                onSubmitEditing={() => onChangeText("")}
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
