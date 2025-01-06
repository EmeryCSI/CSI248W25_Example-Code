import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Title() {
  return <Text style={styles.title}>React Native Crash Course</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
