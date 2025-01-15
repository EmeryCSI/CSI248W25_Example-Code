// StyleWithProps.js - Demonstrates dynamic styling through props
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StyleWithProps = (props) => {
  return (
    // Combines base card styles with dynamic background color from props
    // Array syntax allows merging multiple style objects
    <View style={[styles.card, { backgroundColor: props.backgroundColor }]}>
      {/* Title inherits base styles and dynamic color from props */}
      <Text style={[styles.title, { color: props.color }]}>
        {props.userName}
      </Text>
      {/* Card content with consistent layout */}
      <View style={styles.cardBody}>
        {/* Each row demonstrates prop-based text coloring */}
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: props.color }]}>Email:</Text>
          <Text style={[styles.value, { color: props.color }]}>
            {props.email}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: props.color }]}>Phone:</Text>
          <Text style={[styles.value, { color: props.color }]}>
            {props.phoneNumber}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: props.color }]}>Address:</Text>
          <Text style={[styles.value, { color: props.color }]}>
            {props.address}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Base card styling:
  // - Rounded corners and padding for consistent layout
  // - Shadow effects for depth
  // - No background color (provided via props)
  card: {
    borderRadius: 12,
    padding: 20,
    margin: 10,
    // Cross-platform shadow implementation
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 }, // Shadow direction and distance
    shadowOpacity: 0.1, // Subtle shadow intensity
    shadowRadius: 8, // Shadow blur radius
    elevation: 3, // Android elevation
  },
  // Base title styling:
  // - Large font for visual hierarchy
  // - No color (provided via props)
  // - Consistent spacing and typography
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  // Content container:
  // - Vertical spacing between rows
  cardBody: {
    gap: 12,
  },
  // Row layout:
  // - Horizontal alignment of label and value
  // - Consistent vertical spacing
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  // Label base styling:
  // - Fixed width for alignment
  // - No color (provided via props)
  // - Semi-bold weight for emphasis
  label: {
    fontWeight: "600",
    fontSize: 16,
    width: 80,
    marginRight: 8,
  },
  // Value base styling:
  // - Flexible width for content
  // - No color (provided via props)
  // - Consistent font size
  value: {
    fontSize: 16,
    flex: 1,
  },
});

export default StyleWithProps;
