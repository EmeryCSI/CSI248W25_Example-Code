import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const State = () => {
  // useState is a hook that allows us to add state to our component
  // It returns an array with two values: the current state and a function to update it
  const [count, setCount] = useState(0);
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>4. State</Text>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#fff",
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

export default State;
