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
  Easing,
} from "react-native-reanimated";

const ProgressScreen = () => {
  // ===== PROGRESS ANIMATION SETUP =====

  // 1. SHARED VALUES: These control the progress of each bar
  // Both progress bars start at 0% (empty)
  const progress1 = useSharedValue(0); // Simple progress (0 to 1)
  const progress2 = useSharedValue(0); // Stepped progress (0 to 0.33 to 0.66 to 1)

  // 2. ANIMATED STYLES: These connect shared values to component styles

  // Simple progress bar animated style
  const progressStyle1 = useAnimatedStyle(() => {
    return {
      // Convert the 0-1 value to a percentage width
      // When progress1.value is 0, width will be 0%
      // When progress1.value is 1, width will be 100%
      width: `${progress1.value * 100}%`,
    };
  });

  // Stepped progress bar animated style
  const progressStyle2 = useAnimatedStyle(() => {
    return {
      // Same conversion as above, but this one will move in steps
      width: `${progress2.value * 100}%`,
    };
  });

  // 3. ANIMATION HANDLERS: These functions trigger the animations

  // Simple progress animation - smooth transition from 0% to 100%
  const handleSimpleProgress = () => {
    // Reset to 0 first
    progress1.value = 0;

    // Animate to 1 (100%) over 2 seconds with a custom easing
    progress1.value = withTiming(1, {
      duration: 2000,
      // Bezier curve creates a slight acceleration/deceleration effect
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });

    // Note: withTiming creates a smooth transition over time
  };

  // Stepped progress animation - moves in three distinct steps
  const handleSteppedProgress = () => {
    // Reset to 0 first
    progress2.value = 0;

    // Step 1: Animate to 33% in 500ms
    progress2.value = withTiming(0.33, { duration: 500 });

    // Step 2: After 700ms delay, animate to 66%
    setTimeout(() => {
      progress2.value = withTiming(0.66, { duration: 500 });

      // Step 3: After another 700ms delay, animate to 100%
      setTimeout(() => {
        progress2.value = withTiming(1, { duration: 500 });
      }, 700);
    }, 700);

    // Note: We use setTimeout for delays instead of withDelay
    // because we want to chain multiple animations sequentially
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Progress Animations</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>About Progress Animations:</Text>
          <Text style={styles.infoText}>
            • Progress animations typically show completion or loading states
          </Text>
          <Text style={styles.infoText}>
            • Use withTiming() to create smooth progress transitions
          </Text>
          <Text style={styles.infoText}>
            • Stepped progress can show distinct phases of a process
          </Text>
        </View>

        <View style={styles.demoSection}>
          <Text style={styles.sectionTitle}>Simple Progress</Text>
          <View style={styles.progressBarContainer}>
            <Animated.View
              style={[styles.progressBar, styles.progressBar1, progressStyle1]}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSimpleProgress}
          >
            <Text style={styles.buttonText}>Start Progress</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.demoSection}>
          <Text style={styles.sectionTitle}>Stepped Progress</Text>
          <View style={styles.progressBarContainer}>
            <Animated.View
              style={[styles.progressBar, styles.progressBar2, progressStyle2]}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSteppedProgress}
          >
            <Text style={styles.buttonText}>Start Stepped Progress</Text>
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
  progressBarContainer: {
    height: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    borderRadius: 10,
  },
  progressBar1: {
    backgroundColor: "#4CAF50",
  },
  progressBar2: {
    backgroundColor: "#2196F3",
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

export default ProgressScreen;
