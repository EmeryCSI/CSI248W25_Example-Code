import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
/*This Animated object wraps React Native built-ins such as View, ScrollView or FlatList.

You use these components as any other JSX components:
*/
/*A shared value is a driving factor of all your animations. 
You can think of it as a React state which is automagically 
kept in sync between the "JavaScript" and the "native" side of your app (hence the name). 
You create shared values using a useSharedValue hook:*/
const HomeScreen = () => {
  // ===== REANIMATED CORE CONCEPTS =====

  // 1. SHARED VALUE: This is like a special React state that works with animations
  // It holds the current width of our animated box (starting at 100)
  const width = useSharedValue(100);

  // 2. ANIMATION HANDLER: This function will be called when the button is pressed
  // It changes the shared value using an animation function (withSpring)
  const handlePress = () => {
    // withSpring creates a spring-like animation that bounces slightly
    // We're increasing the width by 50 each time the button is pressed
    width.value = withSpring(width.value + 50);

    // Note: We directly modify .value property of shared values
    // This is different from React state where we'd use setWidth(width + 50)
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>React Native Reanimated Examples</Text>

        <View style={styles.demoContainer}>
          <Animated.View
            style={{
              width,
              height: 100,
              backgroundColor: "violet",
              marginBottom: 10,
            }}
          />
          <TouchableOpacity style={styles.demoButton} onPress={handlePress}>
            <Text style={styles.buttonText}>Animate Me</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Key Reanimated Concepts:</Text>
          <Text style={styles.infoText}>
            • Animated components are used to define animatable elements.
          </Text>
          <Text style={styles.infoText}>
            • Shared values are a driving factor of all animations and we define
            them using a useSharedValue hook.
          </Text>
          <Text style={styles.infoText}>
            • Shared values are always accessed and modified by their .value
            property (eg. sv.value = 100;).
          </Text>
          <Text style={styles.infoText}>
            • To create smooth animations modify shared values using animation
            functions like withTiming
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  demoContainer: {
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  demoButton: {
    backgroundColor: "#9c27b0",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  infoContainer: {
    backgroundColor: "#e1f5fe",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: "100%",
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0277bd",
  },
  infoText: {
    fontSize: 14,
    marginBottom: 8,
    color: "#333",
    lineHeight: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#666",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default HomeScreen;
