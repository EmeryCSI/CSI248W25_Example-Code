import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated";

const FadeScreen = () => {
  // ===== FADE ANIMATION SETUP =====

  // 1. SHARED VALUES: These control the opacity of each box
  // All boxes start fully visible (opacity 1)
  const opacity1 = useSharedValue(1);
  const opacity2 = useSharedValue(1);
  const opacity3 = useSharedValue(1);

  // 2. ANIMATED STYLES: These connect shared values to component styles
  // Each style uses a different opacity shared value

  // First box animated style
  const animatedStyle1 = useAnimatedStyle(() => {
    // This function returns a style object that will be updated
    // whenever opacity1.value changes
    return {
      opacity: opacity1.value,
    };
  });

  // Second box animated style
  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      opacity: opacity2.value,
    };
  });

  // Third box animated style
  const animatedStyle3 = useAnimatedStyle(() => {
    return {
      opacity: opacity3.value,
    };
  });

  // 3. ANIMATION HANDLER: This function toggles the fade animation
  const handleFadeToggle = () => {
    // Check current state to determine whether to fade in or out
    if (opacity1.value === 1) {
      // FADE OUT SEQUENCE:

      // First box fades immediately
      opacity1.value = withTiming(0, { duration: 1000 });

      // Second box fades after a 300ms delay
      opacity2.value = withDelay(300, withTiming(0, { duration: 1000 }));

      // Third box fades after a 600ms delay
      opacity3.value = withDelay(600, withTiming(0, { duration: 1000 }));
    } else {
      // FADE IN SEQUENCE:

      // First box appears immediately
      opacity1.value = withTiming(1, { duration: 1000 });

      // Second box appears after a 300ms delay
      opacity2.value = withDelay(300, withTiming(1, { duration: 1000 }));

      // Third box appears after a 600ms delay
      opacity3.value = withDelay(600, withTiming(1, { duration: 1000 }));
    }

    // Note: withTiming creates a smooth transition over time
    // withDelay adds a waiting period before starting the animation
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Fade Animations</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>About Fade Animations:</Text>
          <Text style={styles.infoText}>
            • Fade animations change the opacity of elements over time
          </Text>
          <Text style={styles.infoText}>
            • Use withTiming() to create smooth transitions
          </Text>
          <Text style={styles.infoText}>
            • withDelay() can be used to stagger animations
          </Text>
        </View>

        <View style={styles.demoSection}>
          <Text style={styles.sectionTitle}>Sequential Fade</Text>

          {/* 4. ANIMATED COMPONENTS: These apply the animated styles */}
          <View style={styles.boxContainer}>
            {/* Each Animated.View uses its corresponding animated style */}
            <Animated.View style={[styles.box, styles.box1, animatedStyle1]} />
            <Animated.View style={[styles.box, styles.box2, animatedStyle2]} />
            <Animated.View style={[styles.box, styles.box3, animatedStyle3]} />
          </View>

          {/* Button to trigger the animation */}
          <TouchableOpacity style={styles.button} onPress={handleFadeToggle}>
            <Text style={styles.buttonText}>Toggle Fade</Text>
          </TouchableOpacity>
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
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  box1: {
    backgroundColor: "#FF5252",
  },
  box2: {
    backgroundColor: "#448AFF",
  },
  box3: {
    backgroundColor: "#66BB6A",
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
});

export default FadeScreen;
