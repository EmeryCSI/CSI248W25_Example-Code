import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CarListItem = ({ car }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.make}>{car.make}</Text>
      <Text style={styles.model}>{car.model}</Text>
      <View style={styles.details}>
        <Text style={styles.year}>{car.year}</Text>
        <Text style={styles.price}>${car.price.toLocaleString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  make: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  model: {
    fontSize: 16,
    color: "#555",
    marginBottom: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  year: {
    fontSize: 14,
    color: "#777",
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2c3e50",
  },
});

export default CarListItem;
