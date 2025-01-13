import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ScrollView,
} from "react-native";
//to useState we need to import it from react
import { useState } from "react";
import State from "./components/State";
import Name from "./components/Name";
import GroceryList from "./components/GroceryList";

export default function App() {
  let numbers = [1, 2, 3];
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <State></State>
        <Name></Name>
        <GroceryList></GroceryList>
        {/* <FlatList
          // Pass the array to the data prop
          data={numbers}
          // KeyExtractor wants a unique idenfier for each element
          keyExtractor={({ index }) => index}
          //renderItem is where you create the markup.
          //the callback function for renderItem gets passed an object
          //that object has an item (element) and an index
          //we are destructuring out the item and index
          renderItem={({ item, index }) => {
            // Here we return whatever component we want to render
            // for each item in the array
            return (
              <Text>
                The item is: {item}, The index is: {index}
              </Text>
            );
          }}
        ></FlatList> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1, // Allow the content to grow and fill the screen
  },
  container: {
    flex: 1, // Use all available space
    backgroundColor: "#fff", // White background
    alignItems: "center", // Center items horizontally
    justifyContent: "center", // Center items vertically
    paddingVertical: 20, // Add vertical padding
  },
});
