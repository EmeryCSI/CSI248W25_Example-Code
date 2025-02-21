import React from "react";
import { TextInput } from "react-native-paper";

export default function MyTextInput({ label, value, onChangeText }) {
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode="outlined"
    />
  );
}
