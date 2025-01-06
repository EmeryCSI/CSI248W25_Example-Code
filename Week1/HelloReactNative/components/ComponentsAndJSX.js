import { StyleSheet, Text, View } from "react-native";
import React from "react";
//A component is a JS function that returns a JSX element
//There are two basic sections of a component
//1 . Before the return statement. Add Variables, functions, do anything with JS
//2. Return statement where we describe the UI

export default function ComponentsAndJSX() {
  //create a variable
  const text = "We can display variable values with curly braces";
  const functionText = () => {
    return "You can also call functions from within JSX";
  };
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>1. ComponentsAndJSX</Text>
      <Text>{text}</Text>
      <Text>{functionText()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: "lightgray",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
