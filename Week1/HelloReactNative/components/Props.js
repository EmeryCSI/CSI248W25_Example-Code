import { StyleSheet, Text, View } from "react-native";
import React from "react";
// Props is short for properties
// We can pass values to a components via props
export default function Props({ title, description }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>2. Props</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
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
