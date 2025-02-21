/**
 * ProfileScreen Component - Tutorial Example
 *
 * This screen demonstrates how to create a basic form layout using React Native Paper
 * components. It showcases:
 * - Using Paper's Surface component for section headers
 * - Implementing custom text input components
 * - Structuring a simple form layout
 * - Using Paper's typography system
 */

import { StyleSheet, View } from "react-native";
import { Surface, Text } from "react-native-paper";
import MyTextInput from "../components/MyTextInput";

export default function ProfileScreen() {
  return (
    // Main container with consistent spacing
    <View style={styles.container}>
      {/* Header section using Surface for elevation and visual separation */}
      <Surface style={styles.surface} elevation={4}>
        {/* Typography examples using Paper's Text variants */}
        <Text variant="headlineMedium">Profile</Text>
        <Text variant="bodyLarge">Your profile information</Text>
      </Surface>

      {/* Form inputs using custom MyTextInput component */}
      {/* MyTextInput wraps Paper's TextInput with additional styling */}
      <MyTextInput label="Username" />
      <MyTextInput label="Email" />
    </View>
  );
}

// Styles for layout and spacing
const styles = StyleSheet.create({
  container: {
    flex: 1, // Use all available space
    marginTop: 20, // Space from top of screen
    marginHorizontal: 16, // Consistent side margins
    padding: 16, // Internal padding
  },
  surface: {
    padding: 8, // Internal spacing
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
    borderRadius: 8, // Rounded corners
    marginBottom: 16, // Space below the surface
  },
});
