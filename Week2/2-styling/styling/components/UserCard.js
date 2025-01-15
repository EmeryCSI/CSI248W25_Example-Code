// UserCard.js - A reusable card component for displaying user information
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserCard = (props) => {
  return (
    // Main container with elevation and shadow effects
    <View style={styles.card}>
      {/* Header section with larger, bold text for the user name */}
      <Text style={styles.title}>{props.userName}</Text>

      {/* Card body with organized layout for user details */}
      <View style={styles.cardBody}>
        {/* Each info row has a consistent layout with label and value */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{props.email}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{props.phoneNumber}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{props.address}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Main card container styling:
  // - White background for clean look
  // - Rounded corners for modern appearance
  // - Padding creates space inside the card
  // - Margin separates cards from each other
  // - Shadow adds depth and elevation effect
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    margin: 10,
    // Cross-platform shadow implementation:
    // iOS shadow properties
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 }, // Shadow direction and distance
    shadowOpacity: 0.1, // Subtle shadow intensity
    shadowRadius: 8, // How blurred the shadow appears
    elevation: 3, // Android shadow elevation
  },
  // Title text styling:
  // - Larger font size for hierarchy
  // - Bold weight for emphasis
  // - Letter spacing improves readability
  // - Margin below separates from content
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "black",
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  // Container for all user information:
  // - Uses gap for consistent vertical spacing
  // - Creates visual grouping of content
  cardBody: {
    gap: 12,
  },
  // Row layout for label-value pairs:
  // - Horizontal arrangement using flexDirection
  // - Centered alignment for clean look
  // - Vertical padding adds breathing room
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  // Label text styling:
  // - Semi-bold weight distinguishes from values
  // - Fixed width ensures alignment
  // - Dimgray color for subtle contrast
  label: {
    fontWeight: "600",
    fontSize: 16,
    color: "dimgray",
    width: 80,
    marginRight: 8,
  },
  // Value text styling:
  // - Flex:1 allows text wrapping for long content
  // - Darkslategray provides good readability
  // - Consistent font size with labels
  value: {
    fontSize: 16,
    color: "darkslategray",
    flex: 1,
  },
});

export default UserCard;
