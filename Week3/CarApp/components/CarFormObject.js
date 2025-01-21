import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

// CarFormObject component: A form for adding car details using a single object state
// This approach is useful when dealing with forms that have many fields,
// as it keeps all related data in one place and simplifies state updates.
export default function CarFormObject({ addCar }) {
  // Single object to track all form values
  // Using an object state is beneficial when you have multiple related pieces of data
  // It reduces the number of useState calls and simplifies the update logic
  const [carData, setCarData] = useState({
    make: "",
    model: "",
    year: "",
    price: "",
  });

  // Generic handler for updating any field in the carData object
  // This function uses the name parameter to determine which property to update
  const handleInputChange = (name, value) => {
    setCarData((prevData) => ({
      ...prevData, // Spread the previous state to maintain other field values
      [name]: value, // Update only the field that changed
    }));
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Convert year and price to numbers
    // It's important to convert string inputs to the appropriate data type
    // before sending the data to the parent component or API
    const newCar = {
      ...carData,
      year: parseInt(carData.year, 10), // Base 10 ensures correct parsing
      price: parseFloat(carData.price),
    };
    addCar(newCar); // Call the function passed from the parent to add the new car

    // Reset form after submission
    // This provides a better user experience for adding multiple entries
    setCarData({ make: "", model: "", year: "", price: "" });
  };

  return (
    <View style={styles.form}>
      {/* TextInput for car make */}
      <TextInput
        style={styles.input}
        placeholder="Make"
        value={carData.make}
        onChangeText={(value) => handleInputChange("make", value)}
      />
      {/* TextInput for car model */}
      <TextInput
        style={styles.input}
        placeholder="Model"
        value={carData.model}
        onChangeText={(value) => handleInputChange("model", value)}
      />
      {/* TextInput for car year */}
      <TextInput
        style={styles.input}
        placeholder="Year"
        value={carData.year}
        onChangeText={(value) => handleInputChange("year", value)}
        keyboardType="numeric" // Ensures numeric keyboard for year input
      />
      {/* TextInput for car price */}
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={carData.price}
        onChangeText={(value) => handleInputChange("price", value)}
        keyboardType="numeric" // Ensures numeric keyboard for price input
      />
      {/* Button to submit the form */}
      <Button title="Add Car" onPress={handleSubmit} />
    </View>
  );
}

// Styles for the component
// Using StyleSheet.create is recommended for better performance
const styles = StyleSheet.create({
  form: {
    marginBottom: 20, // Adds some space below the form
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10, // Adds space between input fields
    paddingHorizontal: 10, // Adds horizontal padding inside input fields
  },
});
