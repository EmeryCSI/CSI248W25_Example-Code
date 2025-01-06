import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Styling() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>3. Styling</Text>
      <Text>In React Native styles are usually defined inside component.</Text>
      <Text>Styles are defined using StyleSheet.create()</Text>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>
        It is also possible to use inline styles
      </Text>
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
