import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

// Import screens
import TapScreen from "./screens/TapScreen";
import PanScreen from "./screens/PanScreen";
import RotationScreen from "./screens/RotationScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Tap") {
                iconName = focused ? "finger-print" : "finger-print-outline";
              } else if (route.name === "Pan") {
                iconName = focused ? "move" : "move-outline";
              } else if (route.name === "Rotation") {
                iconName = focused ? "sync" : "sync-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#007AFF",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Tap" component={TapScreen} />
          <Tab.Screen name="Pan" component={PanScreen} />
          <Tab.Screen name="Rotation" component={RotationScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
