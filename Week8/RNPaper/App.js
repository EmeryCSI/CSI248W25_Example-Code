import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView } from "react-native";
import {
  PaperProvider,
  MD3LightTheme,
  Surface,
  Text,
  Button,
  IconButton,
} from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import MyTextInput from "./components/MyTextInput";
import MyCard from "./components/MyCard";
import MyModal from "./components/MyModal";
import ThemeColors from "./components/ThemeColors";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

// Create the bottom tab navigator
const Tab = createBottomTabNavigator();

//setup the theme
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#6200ee",
    secondary: "#03dac6",
    error: "#B00020",
    background: "#f6f6f6",
  },
  roundness: 3,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Profile") {
                iconName = "account";
              } else if (route.name === "Settings") {
                iconName = "cog";
              }

              return (
                <IconButton icon={iconName} size={size} iconColor={color} />
              );
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
    padding: 16,
  },
  scrollView: {
    flex: 1,
  },
  surface: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 16,
  },
});
