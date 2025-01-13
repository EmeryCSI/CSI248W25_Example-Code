import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
} from "react-native";
import React from "react";
import { useState } from "react";

export default function GroceryList() {
  //make a grocery list and add it to state
  const [groceries, setGroceries] = useState(["Milk", "Eggs", "Bread"]);
  const [newItem, setNewItem] = useState("");
  function itemHandler() {
    //truthy falsy values 0, "", null, undefined THESE ARE FALSE
    //Everything else is truthy "String with any text" 2
    if (!newItem) {
      return;
    }
    //In order for state to work I have use use the setGroceries function if I
    //want to change groceries
    //you cannot just modify a variable tracked by state
    //groceries.push(newItem);
    //we want to create a new array with everything from groceries but add
    //newitem
    //... Spread operator = ALL OF THE ITEMS IN [] {}

    const newArray = [...groceries, newItem];
    console.log(newArray);
    setGroceries(newArray);
    //clear the newItem state after adding to array.
    setNewItem("");
  }
  function renderGrocery({ item, index }) {
    return (
      <View style={styles.groceryItem}>
        <Text style={styles.groceryText}>
          {item} ({index + 1})
        </Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery List</Text>
      <FlatList
        data={groceries}
        renderItem={renderGrocery}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Enter an item to add to list</Text>
        <TextInput
          style={styles.input}
          value={newItem}
          onChangeText={setNewItem}
          placeholder="New item"
        />
        <Button onPress={itemHandler} title="Add" color="#4CAF50" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0", // Light gray background
    padding: 20, // Add space inside the container
    borderRadius: 10, // Rounded corners
    marginBottom: 20, // Space below the container
    width: "100%", // Full width of the parent
  },
  title: {
    fontSize: 24, // Large font size for the title
    fontWeight: "bold", // Make the title bold
    marginBottom: 10, // Space below the title
    textAlign: "center", // Center the title text
  },
  list: {
    maxHeight: 200, // Limit the height of the list
    marginBottom: 20, // Space below the list
  },
  groceryItem: {
    backgroundColor: "#ffffff", // White background for each item
    padding: 10, // Space inside each item
    marginVertical: 5, // Vertical space between items
    borderRadius: 5, // Slightly rounded corners for items
  },
  groceryText: {
    fontSize: 16, // Medium font size for grocery items
  },
  inputContainer: {
    backgroundColor: "#ffffff", // White background for input area
    padding: 15, // Space inside the input container
    borderRadius: 5, // Rounded corners for input container
  },
  inputLabel: {
    fontSize: 16, // Medium font size for input label
    marginBottom: 5, // Small space below the label
  },
  input: {
    borderWidth: 1, // Add a border to the input
    borderColor: "#ccc", // Light gray border color
    borderRadius: 5, // Rounded corners for the input
    padding: 10, // Space inside the input
    marginBottom: 10, // Space below the input
    fontSize: 16, // Medium font size for input text
  },
});
