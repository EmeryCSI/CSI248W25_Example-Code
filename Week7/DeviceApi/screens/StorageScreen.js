import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
//AsyncStorage

//super similar to localStorage in the dom
//AsycStorage is a simple, unecrypted, persistent, key value pair system

//All data is tores as strings
//async use async await
//data persists across app restarts

export default function StorageScreen() {
  const [input, setInput] = useState("");
  const [savedText, setSavedText] = useState("");

  //async function that saves text
  const saveText = async () => {
    try {
      //save the input variable
      await AsyncStorage.setItem("savedText", input);
      setSavedText(input);
      setInput("");
    } catch (error) {
      console.error(`Error Saving ${error}`);
    }
  };
  //async function that loads text
  const loadSavedText = async () => {
    try {
      //load a value from AsyncStorage
      const value = await AsyncStorage.getItem("savedText");
      if (value !== null) {
        setSavedText(value);
      }
    } catch (error) {
      console.error(`Error Loading ${error}`);
    }
  };
  return (
    <View>
      <Text>AsyncStorage Demo</Text>
      <TextInput
        value={input}
        placeholder="Enter Text to save"
        onChangeText={setInput}
      />
      <Button title="Save Text" onPress={saveText}></Button>
      <Text>Saved Text: {savedText}</Text>
      <Button title="Load Saved Text" onPress={loadSavedText}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
