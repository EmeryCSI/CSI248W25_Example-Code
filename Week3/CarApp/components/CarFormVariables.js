import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";

//We need a form a collection of (Text TextInputs)
//we need state variables for each set of Text / Text Input
export default function CarFormVariables({ addCar }) {
  //state variables
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  //have an object which stores the errors add it to state
  //because we are going to display it
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    //we can access the state variables from out handler
    console.log(`${make} ${model} ${year} ${price}`);
    //function that checks if state variables are valid
    if (validateData()) {
      //we need to create a new car
      const newCar = {
        make,
        model,
        year: parseInt(year, 10),
        price: parseFloat(price),
      };
      console.log(newCar);
      //check if valid call add cars if valid
      //do not call addcar of invalid
      addCar(newCar);
    }
  };
  const validateData = () => {
    //--Simple but clunky way
    //check all the state strings
    //if they fail pop up an alert to the user
    //return true or false
    //--Better way
    //check if make is empty
    let newErrors = {};
    if (!make.trim()) newErrors.make = "Make is required";
    if (!model.trim()) newErrors.model = "Model is required";
    //this is kind of like tryparsing
    if (isNaN(parseInt(year, 10))) newErrors.year = "Year must be whole number";
    if (isNaN(parseFloat(price))) newErrors.price = "Price must me a number";
    //setErrors to new Errors
    setErrors(newErrors);
    //if there is no errors this will return true
    //if there are errors return false
    //Object.keys()
    return Object.keys(newErrors).length === 0;
  };
  return (
    <View style={styles.form}>
      {/* TextInput for car make */}
      <TextInput
        style={[styles.input, errors.make && styles.inputError]}
        placeholder="Make"
        value={make}
        onChangeText={(text) => {
          setMake(text);
          // Clear the error for this field when the user starts typing
          setErrors((prev) => ({ ...prev, make: null }));
        }}
      />
      {/* Conditional rendering using && operator:
        - If errors.make is truthy (contains an error message),
          the <Text> element will be rendered.
        - If errors.make is falsy (null or undefined),
          nothing will be rendered here. */}
      {errors.make && <Text style={styles.errorText}>{errors.make}</Text>}

      {/* TextInput for car model */}
      <TextInput
        style={[styles.input, errors.model && styles.inputError]}
        placeholder="Model"
        value={model}
        onChangeText={(text) => {
          setModel(text);
          setErrors((prev) => ({ ...prev, model: null }));
        }}
      />
      {/* Similar conditional rendering for model error */}
      {errors.model && <Text style={styles.errorText}>{errors.model}</Text>}

      {/* TextInput for car year */}
      <TextInput
        style={[styles.input, errors.year && styles.inputError]}
        placeholder="Year"
        value={year}
        onChangeText={(text) => {
          setYear(text);
          setErrors((prev) => ({ ...prev, year: null }));
        }}
        keyboardType="numeric" // Set keyboard type to numeric for year input
      />
      {/* Conditional rendering for year error */}
      {errors.year && <Text style={styles.errorText}>{errors.year}</Text>}

      {/* TextInput for car price */}
      <TextInput
        style={[styles.input, errors.price && styles.inputError]}
        placeholder="Price"
        value={price}
        onChangeText={(text) => {
          setPrice(text);
          setErrors((prev) => ({ ...prev, price: null }));
        }}
        keyboardType="numeric" // Set keyboard type to numeric for price input
      />
      {/* Conditional rendering for price error */}
      {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}

      {/* Submit button */}
      <Button title="Add Car" onPress={handleSubmit} />
    </View>
  );
}

// Styles for the component
const styles = StyleSheet.create({
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: "red", // Highlight input fields with errors
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 5,
  },
});
