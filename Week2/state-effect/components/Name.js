import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";

export default function Name() {
  //state variables for first and last name
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const buttonHandler = () => {
    alert(`Hello ${firstName} ${lastName}`);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your first name</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <Text style={styles.label}>Enter your last name</Text>
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />
      <Button onPress={buttonHandler} title="Show full name" />
      <Text style={styles.fullName}>
        Your full name is {firstName} {lastName}
      </Text>
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
  label: {
    fontSize: 16, // Medium font size for labels
    marginBottom: 5, // Small space below labels
  },
  input: {
    borderWidth: 1, // Add a border to inputs
    borderColor: "#ccc", // Light gray border color
    borderRadius: 5, // Rounded corners for inputs
    padding: 10, // Space inside the inputs
    marginBottom: 15, // Space below the inputs
    fontSize: 16, // Medium font size for input text
  },
  fullName: {
    fontSize: 18, // Slightly larger font size for full name
    fontWeight: "bold", // Make the full name bold
    marginTop: 15, // Space above the full name
    textAlign: "center", // Center the full name text
  },
});
