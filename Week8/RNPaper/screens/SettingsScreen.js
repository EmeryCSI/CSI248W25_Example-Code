/**
 * SettingsScreen Component - Tutorial Example
 *
 * This screen demonstrates advanced React Native Paper concepts including:
 * - Modal dialogs using Paper's components
 * - State management with useState hook
 * - Button variants (outlined mode)
 * - Combining ScrollView with Paper components
 * - Custom theme management (via ThemeColors component)
 */

import { StyleSheet, View, ScrollView } from "react-native";
import { Surface, Text, Button } from "react-native-paper";
import { useState } from "react";
import MyModal from "../components/MyModal";
import ThemeColors from "../components/ThemeColors";

export default function SettingsScreen() {
  // State management for modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  return (
    // ScrollView wrapper for scrollable content
    <ScrollView style={styles.scrollView}>
      {/* Main container with consistent spacing */}
      <View style={styles.container}>
        {/* Header section using Surface component */}
        <Surface style={styles.surface} elevation={4}>
          {/* Typography examples with Paper's Text variants */}
          <Text variant="headlineMedium">Settings</Text>
          <Text variant="bodyLarge">App settings and configuration</Text>
        </Surface>

        {/* Button example using 'outlined' mode variant */}
        <Button onPress={() => setModalVisible(true)} mode="outlined">
          Show Theme Settings
        </Button>

        {/* Modal implementation using custom MyModal component */}
        {/* Demonstrates how to handle modal visibility state */}
        <MyModal
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
        >
          {/* ThemeColors component for theme customization */}
          <ThemeColors />
        </MyModal>
      </View>
    </ScrollView>
  );
}

// Styles for layout and component positioning
const styles = StyleSheet.create({
  container: {
    flex: 1, // Use all available space
    marginTop: 20, // Space from top of screen
    marginHorizontal: 16, // Consistent side margins
    padding: 16, // Internal padding
  },
  scrollView: {
    flex: 1, // Ensures ScrollView takes full height
  },
  surface: {
    padding: 8, // Internal spacing
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
    borderRadius: 8, // Rounded corners
    marginBottom: 16, // Space below the surface
  },
});
