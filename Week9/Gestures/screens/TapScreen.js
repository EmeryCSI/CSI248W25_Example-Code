import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export default function TapScreen() {
  // State to track tap counts and display messages
  const [tapCount, setTapCount] = useState(0);
  // State used to display the last tap type
  const [lastTapType, setLastTapType] = useState("None");

  // Create a single tap gesture
  const singleTap = Gesture.Tap()
    // Configure the number of taps required (1 for single tap)
    .numberOfTaps(1)
    // maxDuration defines how long the tap can last (in milliseconds)
    .maxDuration(250)
    .onStart(() => {
      // This callback is fired when the tap starts
      setLastTapType("Single Tap");
      setTapCount((prev) => prev + 1);
    });

  // Create a double tap gesture
  const doubleTap = Gesture.Tap()
    // Configure for double tap (2 taps required)
    .numberOfTaps(2)
    // maxDuration here applies to the whole sequence
    .maxDuration(250)
    .onStart(() => {
      setLastTapType("Double Tap");
      setTapCount((prev) => prev + 1);
    });

  // Compose the gestures to handle both single and double taps
  // The order matters! We put doubleTap first so it takes precedence
  const gesture = Gesture.Exclusive(doubleTap, singleTap);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tap Gesture Demo</Text>
      <Text style={styles.subtitle}>
        Try single tap and double tap on the box below
      </Text>

      {/* Stats display */}
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>Total Taps: {tapCount}</Text>
        <Text style={styles.statText}>Last Tap Type: {lastTapType}</Text>
      </View>

      {/* Wrap the demo area in GestureDetector to enable gesture handling */}
      <GestureDetector gesture={gesture}>
        <View style={styles.demoArea}>
          <Text style={styles.instruction}>Tap or Double Tap Here</Text>
        </View>
      </GestureDetector>

      {/* Instructions */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionTitle}>How it works:</Text>
        <Text style={styles.instructionText}>
          • Single tap will register as a single tap event
        </Text>
        <Text style={styles.instructionText}>
          • Double tap will register as a double tap event
        </Text>
        <Text style={styles.instructionText}>
          • Watch the counter and last tap type update
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
    textAlign: "center",
  },
  statsContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  statText: {
    fontSize: 16,
    color: "#007AFF",
    marginVertical: 4,
  },
  demoArea: {
    width: 200,
    height: 200,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // Add shadow for better visual feedback
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  instruction: {
    textAlign: "center",
    color: "#666",
    padding: 10,
    fontSize: 16,
  },
  instructionsContainer: {
    marginTop: 32,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    // Add subtle shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  instructionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  instructionText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
    paddingLeft: 8,
  },
});
