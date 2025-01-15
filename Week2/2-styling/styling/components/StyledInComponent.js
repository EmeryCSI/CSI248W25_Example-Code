// StyledInComponent.js - Demonstrates styling through style composition
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StyledInComponent = (props) => {
  return (
    // Combines base card styles with theme-specific styles using array syntax
    // styles.card provides structure, styles.styledCard adds theme colors
    <View style={[styles.card, styles.styledCard]}>
      {/* Header combines base title styling with theme-specific text color */}
      <Text style={[styles.title, styles.styledText]}>{props.userName}</Text>

      {/* Content section with themed styling */}
      <View style={styles.cardBody}>
        {/* Each row combines structural and theme-specific styles */}
        <View style={styles.infoRow}>
          <Text style={[styles.label, styles.styledText]}>Email:</Text>
          <Text style={[styles.value, styles.styledText]}>{props.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.label, styles.styledText]}>Phone:</Text>
          <Text style={[styles.value, styles.styledText]}>
            {props.phoneNumber}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.label, styles.styledText]}>Address:</Text>
          <Text style={[styles.value, styles.styledText]}>{props.address}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Base card styling:
  // - Provides structural foundation
  // - Handles layout and elevation
  // - Theme-neutral styling
  card: {
    borderRadius: 12,
    padding: 20,
    margin: 10,
    // Cross-platform shadow implementation:
    // Creates depth without theme-specific colors
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 }, // Shadow direction and distance
    shadowOpacity: 0.1, // Subtle shadow intensity
    shadowRadius: 8, // Shadow blur radius
    elevation: 3, // Android elevation
  },
  // Theme-specific card styling:
  // - Adds visual theme through colors
  // - Subtle border reinforces containment
  // - Light blue theme for a calm, professional look
  styledCard: {
    backgroundColor: "aliceblue", // Light blue background
    borderWidth: 1, // Thin border
    borderColor: "lightblue", // Subtle border color
  },
  // Base title styling:
  // - Handles size and spacing
  // - Theme-neutral properties
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  // Content layout:
  // - Consistent vertical spacing
  // - Theme-neutral structure
  cardBody: {
    gap: 12,
  },
  // Row layout:
  // - Horizontal alignment
  // - Spacing and positioning
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  // Label structure:
  // - Width and weight
  // - Theme-neutral properties
  label: {
    fontWeight: "600",
    fontSize: 16,
    width: 80,
    marginRight: 8,
  },
  // Value structure:
  // - Flexible sizing
  // - Theme-neutral properties
  value: {
    fontSize: 16,
    flex: 1,
  },
  // Theme-specific text styling:
  // - Applied to all text elements
  // - Maintains consistent theme color
  styledText: {
    color: "steelblue", // Professional blue text color
  },
});

export default StyledInComponent;
