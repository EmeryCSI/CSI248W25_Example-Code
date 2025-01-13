import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useState } from "react";

export default function State() {
  //useState() returns two things the value of the variable and a function to update
  //when you call useState you pass the initial value
  //this creates a variable counter = 0 and a function setCounter which updates counter
  const [counter, setCounter] = useState(0);
  //let counter = 0;
  const increment = () => {
    //you cannot just directly change a state variable
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>useState Hook</Text>
      <Text style={styles.explanation}>
        useState is a hook in React. Hooks are just methods that are provided to
        use from the React Library. useState is a function that returns two
        items. The first item is the value of the variable tracked by state. The
        second item is a function for updating that value. When we useState the
        UI will automatically update when state changes.
      </Text>
      <Text style={styles.count}>Count: {counter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={increment}></Button>
        {/* I am going to pass the function as a generic arrow function */}
        <Button
          title="Decrement"
          onPress={() => setCounter(counter - 1)}
        ></Button>
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
  explanation: {
    fontSize: 16, // Medium font size for explanation text
    marginBottom: 15, // Space below the explanation
    lineHeight: 22, // Increase line height for better readability
  },
  count: {
    fontSize: 20, // Large font size for the count
    fontWeight: "bold", // Make the count bold
    marginBottom: 15, // Space below the count
    textAlign: "center", // Center the count text
  },
  buttonContainer: {
    flexDirection: "row", // Arrange buttons horizontally
    justifyContent: "space-around", // Evenly space the buttons
  },
});
