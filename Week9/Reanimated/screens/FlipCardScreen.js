import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

// Get screen dimensions to calculate card size
const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = CARD_WIDTH * 0.6;

// Animation timing constants - slowed down for better visualization
const FLIP_DURATION = 2000;
const GESTURE_FLIP_DURATION = 800;

const FlipCardScreen = () => {
  // ===== FLIP CARD ANIMATION SETUP =====

  // 1. SHARED VALUES: These control the flip progress
  // Both start at 0 (not flipped)
  const flipProgress = useSharedValue(0); // For vertical flip (Y-axis)
  const flipProgress2 = useSharedValue(0); // For horizontal flip (X-axis)

  // 2. ANIMATED STYLES: These connect shared values to component styles

  // --- Vertical Flip Card (First Card) ---

  // Front side of vertical flip card
  const frontAnimatedStyle = useAnimatedStyle(() => {
    return {
      // Transform the card by rotating around Y axis
      transform: [
        {
          rotateY:
            // Convert 0-1 progress to 0-180 degrees rotation
            interpolate(
              flipProgress.value, // Input: animation progress (0 to 1)
              [0, 1], // Input range
              [0, 180] // Output range (degrees)
            ) + "deg",
        },
      ],
    };
  });

  // Back side of vertical flip card
  const backAnimatedStyle = useAnimatedStyle(() => {
    return {
      // Transform the card by rotating around Y axis
      // Back starts at 180 degrees (flipped) and rotates to 360
      transform: [
        {
          rotateY: interpolate(flipProgress.value, [0, 1], [180, 360]) + "deg",
        },
      ],
    };
  });

  // --- Horizontal Flip Card (Second Card) ---

  // Front side of horizontal flip card
  const frontHorizontalStyle = useAnimatedStyle(() => {
    return {
      // Transform the card by rotating around X axis (horizontal flip)
      transform: [
        {
          rotateX: interpolate(flipProgress2.value, [0, 1], [0, 180]) + "deg",
        },
      ],
    };
  });

  // Back side of horizontal flip card
  const backHorizontalStyle = useAnimatedStyle(() => {
    return {
      // Transform the card by rotating around X axis
      transform: [
        {
          rotateX: interpolate(flipProgress2.value, [0, 1], [180, 360]) + "deg",
        },
      ],
    };
  });

  // 3. ANIMATION HANDLERS: These functions trigger the animations

  // Handle button-triggered vertical flip
  const handleFlip = () => {
    // Toggle between 0 and 1 with a timing animation
    flipProgress.value = withTiming(
      // If currently at 0, go to 1; if at 1, go back to 0
      flipProgress.value === 0 ? 1 : 0,
      {
        // Slowed down duration for better visualization
        duration: FLIP_DURATION,
      }
    );
  };

  // 4. GESTURE HANDLER: For swipe-controlled horizontal flip
  // Create a pan (swipe) gesture handler
  const swipeGesture = Gesture.Pan()
    // This runs continuously as the user swipes
    .onUpdate((event) => {
      // Convert vertical swipe movement to flip progress
      const verticalMovement = Math.abs(event.translationY);

      // Normalize to a value between 0 and 1 (max at 300px movement)
      // Using a higher value (300) to require more movement for a full flip
      const normalizedValue = Math.min(verticalMovement / 300, 1);

      // Swipe down: flip the card
      if (event.translationY > 0) {
        flipProgress2.value = normalizedValue;
      }
      // Swipe up: flip back (if already flipped)
      else if (event.translationY < 0 && flipProgress2.value > 0) {
        // Calculate how much to flip back
        flipProgress2.value =
          1 - Math.min(Math.abs(event.translationY) / 300, 1);
      }
    })
    // This runs when the user lifts their finger
    .onEnd(() => {
      // Snap to nearest state (flipped or not flipped)
      // If more than halfway flipped, complete the flip
      if (flipProgress2.value > 0.5) {
        flipProgress2.value = withTiming(1, {
          // Slowed down duration for better visualization
          duration: GESTURE_FLIP_DURATION,
        });
      }
      // Otherwise, flip back to the start
      else {
        flipProgress2.value = withTiming(0, {
          // Slowed down duration for better visualization
          duration: GESTURE_FLIP_DURATION,
        });
      }
    });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Flip Card Animations</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>About Flip Card Animations:</Text>
          <Text style={styles.infoText}>
            • Flip animations use 3D transforms to create card flipping effects
          </Text>
          <Text style={styles.infoText}>
            • Use interpolate() to map animation progress to rotation values
          </Text>
          <Text style={styles.infoText}>
            • Gesture handlers can be used to control animations with touch
          </Text>
        </View>

        {/* 5. ANIMATED COMPONENTS: These apply the animated styles */}

        {/* First demo: Button-triggered vertical flip */}
        <View style={styles.demoSection}>
          <Text style={styles.sectionTitle}>Basic Flip Card (Tap)</Text>
          <View style={styles.cardContainer}>
            {/* Front of card - visible when not flipped */}
            <Animated.View
              style={[styles.card, styles.cardFront, frontAnimatedStyle]}
            >
              <Text style={styles.cardText}>Front Side</Text>
            </Animated.View>

            {/* Back of card - visible when flipped */}
            <Animated.View
              style={[styles.card, styles.cardBack, backAnimatedStyle]}
            >
              <Text style={styles.cardText}>Back Side</Text>
            </Animated.View>
          </View>

          {/* Button to trigger the flip */}
          <TouchableOpacity style={styles.button} onPress={handleFlip}>
            <Text style={styles.buttonText}>Flip Card</Text>
          </TouchableOpacity>
        </View>

        {/* Second demo: Gesture-controlled horizontal flip */}
        <View style={styles.demoSection}>
          <Text style={styles.sectionTitle}>
            Swipe Flip Card (Swipe Up/Down)
          </Text>

          {/* Wrap the card in a GestureDetector to handle swipes */}
          <GestureDetector gesture={swipeGesture}>
            <View style={styles.cardContainer}>
              {/* Front of card - visible when not flipped */}
              <Animated.View
                style={[styles.card, styles.cardFront, frontHorizontalStyle]}
              >
                <Text style={styles.cardText}>Front Side</Text>
                <Text style={styles.cardSubText}>Swipe Up/Down</Text>
              </Animated.View>

              {/* Back of card - visible when flipped */}
              <Animated.View
                style={[styles.card, styles.cardBack, backHorizontalStyle]}
              >
                <Text style={styles.cardText}>Back Side</Text>
                <Text style={styles.cardSubText}>Swipe Up/Down</Text>
              </Animated.View>
            </View>
          </GestureDetector>

          <Text style={styles.instructionText}>
            Swipe up or down on the card to flip it
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  infoContainer: {
    backgroundColor: "#e1f5fe",
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
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
  demoSection: {
    marginBottom: 30,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  cardContainer: {
    height: CARD_HEIGHT,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  cardFront: {
    backgroundColor: "#3F51B5",
  },
  cardBack: {
    backgroundColor: "#FF5722",
  },
  cardText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardSubText: {
    color: "white",
    fontSize: 14,
    marginTop: 8,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  instructionText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
  },
});

export default FlipCardScreen;
