/**
 * HomeScreen Component - Tutorial Example
 *
 * This screen demonstrates basic usage of React Native Paper components in combination
 * with React Native's built-in components. It shows how to:
 * - Use ScrollView for scrollable content
 * - Implement Paper's Surface component for elevation and card-like elements
 * - Work with Paper's Typography system (Text variants)
 * - Implement Paper's Button component
 * - Structure a basic layout using React Native's View component
 */

import { StyleSheet, View, ScrollView } from "react-native";
import { Surface, Text, Button } from "react-native-paper";
import MyCard from "../components/MyCard";

export default function HomeScreen() {
  return (
    // ScrollView allows content to be scrollable when it exceeds screen height
    <ScrollView style={styles.scrollView}>
      {/* Container View with consistent padding and margins */}
      <View style={styles.container}>
        {/* Surface provides a card-like element with elevation (shadow) */}
        <Surface style={styles.surface} elevation={4}>
          {/* Paper's Text component with different variants for typography */}
          <Text variant="headlineMedium">Home Screen</Text>
          <Text variant="bodyLarge">Welcome to the app!</Text>
        </Surface>

        {/* Custom Card component demonstration */}
        <MyCard />

        {/* Paper's Button component with 'contained' mode (filled button) */}
        <Button mode="contained" onPress={() => console.log("Button Pressed")}>
          Press Me
        </Button>
      </View>
    </ScrollView>
  );
}

// Styles demonstrate common React Native styling patterns
const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes up all available space
    marginTop: 20, // Space from top
    marginHorizontal: 16, // Consistent side margins
    padding: 16, // Internal spacing
  },
  scrollView: {
    flex: 1, // Ensures ScrollView takes full height
  },
  surface: {
    padding: 8, // Internal spacing for the surface
    alignItems: "center", // Center children horizontally
    justifyContent: "center", // Center children vertically
    borderRadius: 8, // Rounded corners
    marginBottom: 16, // Space below the surface
  },
});
