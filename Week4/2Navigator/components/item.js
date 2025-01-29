import { StyleSheet, Text, View } from "react-native";
import React from "react";

// Item component
// This component displays the item ID and item details passed as props
export default function Item({ itemId, itemDetails }) {
  return (
    <View>
      <Text>Item ID: {itemId}</Text>
      <Text>Item Details: {itemDetails}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
