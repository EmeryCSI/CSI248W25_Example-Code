import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export default function PanScreen() {
  /**
   * State Management:
   * We use a single state object to track both X and Y coordinates of the box.
   * This state will be updated in real-time as the user drags the box.
   */
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /**
   * Boundary Calculations:
   * DEMO_AREA_SIZE: The width/height of the gray square area
   * BOX_SIZE: The width/height of the blue draggable box
   * BOUNDARY: Maximum distance the box can move from the center
   *          Calculated as half the difference between demo area and box size
   */
  const DEMO_AREA_SIZE = 300;
  const BOX_SIZE = 100;
  const BOUNDARY = (DEMO_AREA_SIZE - BOX_SIZE) / 2;

  /**
   * Pan Gesture Handler:
   * Creates a pan gesture that responds to drag movements
   *
   * event.translationX/Y: The distance moved from the start of the gesture
   * - translationX: movement along X axis (- for left, + for right)
   * - translationY: movement along Y axis (- for up, + for down)
   *
   * Math.min/max: Ensures the box stays within the boundary
   * - Math.max(value, -BOUNDARY): Prevents moving too far left/up
   * - Math.min(result, BOUNDARY): Prevents moving too far right/down
   */
  const panGesture = Gesture.Pan().onUpdate((event) => {
    // Constrain movement within boundaries for both X and Y axes
    let newX = Math.min(Math.max(event.translationX, -BOUNDARY), BOUNDARY);
    let newY = Math.min(Math.max(event.translationY, -BOUNDARY), BOUNDARY);

    // Update the position state which will move the box
    setPosition({ x: newX, y: newY });
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pan Gesture Demo</Text>
      <Text style={styles.subtitle}>
        Touch and drag the blue box - It will stay within bounds
      </Text>

      {/* Position Display: Shows real-time X/Y coordinates */}
      <View style={styles.statsContainer}>
        <Text style={styles.statText}>
          X Position: {Math.round(position.x)}
        </Text>
        <Text style={styles.statText}>
          Y Position: {Math.round(position.y)}
        </Text>
      </View>

      {/* 
        Demo Area: Gray container that defines the boundaries
        The draggable box will be constrained to move within this area
      */}
      <View style={styles.demoArea}>
        {/* 
          GestureDetector: Wraps the draggable element to enable gesture recognition
          This is required for the gesture handler to work
        */}
        <GestureDetector gesture={panGesture}>
          {/* 
            Draggable Box: Uses transform to move based on position state
            transform: Preferred way to move elements for better performance
            - translateX/Y: Moves the element without affecting layout
          */}
          <View
            style={[
              styles.draggable,
              {
                transform: [
                  { translateX: position.x },
                  { translateY: position.y },
                ],
              },
            ]}
          >
            <Text style={styles.instruction}>Drag Me!</Text>
          </View>
        </GestureDetector>
      </View>

      {/* Instructions for users */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionTitle}>How Pan Gesture Works:</Text>
        <Text style={styles.instructionText}>
          • Touch and hold the blue box to start dragging
        </Text>
        <Text style={styles.instructionText}>
          • Move your finger to pan the box around
        </Text>
        <Text style={styles.instructionText}>
          • The box will stay within the gray area
        </Text>
        <Text style={styles.instructionText}>
          • Watch the X/Y coordinates update in real-time
        </Text>
      </View>
    </View>
  );
}

/**
 * Styles:
 * container: Main layout with centered content
 * demoArea: Gray square that defines the movement boundaries
 * draggable: Blue box that can be moved with pan gesture
 * statsContainer: Displays current position coordinates
 * instructionsContainer: Shows usage instructions
 */
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
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
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
    marginHorizontal: 10,
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
    // Important: This allows the draggable box to move beyond its boundaries
    overflow: "visible",
  },
  draggable: {
    width: 100,
    height: 100,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // Add shadow to draggable box
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
