import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export default function RotationScreen() {
  /**
   * State Management:
   * rotation: Tracks the current rotation angle in radians
   * We convert this to degrees for display purposes
   *
   * Note: In React Native, rotation transform accepts radians
   * - Full circle = 2π radians = 360 degrees
   * - To convert radians to degrees: radians * (180/π)
   * - To convert degrees to radians: degrees * (π/180)
   */
  const [rotation, setRotation] = useState(0);

  /**
   * Previous Rotation Reference:
   * We need to track the total accumulated rotation
   * This helps us maintain continuous rotation without jumps
   */
  const [totalRotation, setTotalRotation] = useState(0);

  /**
   * Rotation Gesture Handler:
   * Creates a rotation gesture that responds to two-finger rotate movements
   *
   * event.rotation: The rotation angle change since the gesture started
   * - Positive values: clockwise rotation
   * - Negative values: counter-clockwise rotation
   * - Values are in radians
   *
   * We add the new rotation to our total accumulated rotation
   * This ensures smooth continuous rotation across multiple gestures
   */
  const rotationGesture = Gesture.Rotation()
    .onUpdate((event) => {
      // Update rotation state with new rotation value
      setRotation(event.rotation + totalRotation);
    })
    .onEnd(() => {
      // When gesture ends, save the total accumulated rotation
      // This becomes our new starting point for the next gesture
      setTotalRotation(rotation);
    });

  /**
   * Helper function to convert radians to degrees
   * Used for displaying the rotation angle in a human-readable format
   */
  const toDegrees = (rad) => {
    return Math.round((rad * 180) / Math.PI);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rotation Gesture Demo</Text>
      <Text style={styles.subtitle}>
        Use two fingers to rotate the green circle
      </Text>

      {/* Rotation Angle Display */}
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>Rotation: {toDegrees(rotation)}°</Text>
      </View>

      {/* 
        Demo Area: Contains the rotatable element
        Using a larger area to give plenty of room for two-finger rotation
      */}
      <View style={styles.demoArea}>
        {/* 
          GestureDetector: Wraps the rotatable element
          This enables the rotation gesture recognition
        */}
        <GestureDetector gesture={rotationGesture}>
          {/* 
            Rotatable Circle: Uses transform to apply rotation
            transform: rotate accepts a string with the rotation in radians
            Note the string template literal for the rotation value
          */}
          <View
            style={[
              styles.rotatable,
              {
                transform: [{ rotate: `${rotation}rad` }],
              },
            ]}
          >
            <Text style={styles.instruction}>Rotate Me!</Text>
            {/* 
              Direction Indicator: Helps visualize the rotation
              A small circle near the edge of the main circle
            */}
            <View style={styles.rotationIndicator} />
          </View>
        </GestureDetector>
      </View>

      {/* Instructions for users */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionTitle}>How Rotation Gesture Works:</Text>
        <Text style={styles.instructionText}>
          • Place two fingers on the green circle
        </Text>
        <Text style={styles.instructionText}>
          • Rotate your fingers clockwise or counter-clockwise
        </Text>
        <Text style={styles.instructionText}>
          • The circle will follow your fingers' rotation
        </Text>
        <Text style={styles.instructionText}>
          • Watch the rotation angle update in degrees
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
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
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
  statText: {
    fontSize: 16,
    color: "#007AFF",
  },
  demoArea: {
    width: 300,
    height: 300,
    backgroundColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // Add shadow for depth
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rotatable: {
    width: 150,
    height: 150,
    backgroundColor: "#4CD964",
    borderRadius: 75, // Half of width/height for circle
    justifyContent: "center",
    alignItems: "center",
    // Add shadow to rotatable circle
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  rotationIndicator: {
    position: "absolute",
    top: 10, // Position near the edge of the circle
    width: 20,
    height: 20,
    backgroundColor: "white",
    borderRadius: 10, // Make it a small circle
  },
  instruction: {
    color: "white",
    textAlign: "center",
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
