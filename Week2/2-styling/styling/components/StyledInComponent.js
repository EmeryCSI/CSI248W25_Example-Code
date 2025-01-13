// StyledInComponent.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StyledInComponent = (props) => {
  return (
    <View style={[styles.card, styles.styledCard]}>
      <Text style={styles.title}>{props.userName}</Text>
      <View style={styles.cardBody}>
        <Text style={styles.label}>Email:</Text>
        <Text>{props.email}</Text>
        <Text style={styles.label}>Phone:</Text>
        <Text>{props.phoneNumber}</Text>
        <Text style={styles.label}>Address:</Text>
        <Text>{props.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  styledCard: {
    backgroundColor: "lightblue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardBody: {
    gap: 4,
  },
  label: {
    fontWeight: "600",
    marginTop: 4,
  },
});

export default StyledInComponent;
