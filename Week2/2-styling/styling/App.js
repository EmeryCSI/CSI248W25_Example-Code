// App.js - Main application demonstrating different styling approaches in React Native
import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet, View } from "react-native";
import UserCard from "./components/UserCard";
import StyledInComponent from "./components/StyledInComponent";
import StyleWithProps from "./components/StyleWithProps";

// Sample user data
const users = [
  {
    userName: "John Doe",
    phoneNumber: "(123) 456-7890",
    email: "john.doe@example.com",
    address: "123 Main Street, Cityville, ST 12345",
  },
  {
    userName: "Jane Smith",
    phoneNumber: "(987) 654-3210",
    email: "jane.smith@example.com",
    address: "456 Elm Avenue, Townsville, ST 67890",
  },
  {
    userName: "Bob Jackson",
    phoneNumber: "(555) 123-4567",
    email: "bob.jackson@example.com",
    address: "789 Oak Drive, Villageton, ST 13579",
  },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.mainTitle}>Styling Demo</Text>

        {/* Section 1: Default Styling */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Default Styling</Text>
          <Text style={styles.sectionDescription}>
            Using StyleSheet with predefined styles
          </Text>
          <UserCard
            userName={users[0].userName}
            phoneNumber={users[0].phoneNumber}
            email={users[0].email}
            address={users[0].address}
          />
        </View>

        {/* Section 2: Styled In Component */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Component-Specific Styling</Text>
          <Text style={styles.sectionDescription}>
            Styling composed within the component
          </Text>
          <StyledInComponent
            userName={users[1].userName}
            phoneNumber={users[1].phoneNumber}
            email={users[1].email}
            address={users[1].address}
          />
        </View>

        {/* Section 3: Props-based Styling */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Props-Based Styling</Text>
          <Text style={styles.sectionDescription}>
            Dynamic styling through props
          </Text>
          {users.map((user, index) => (
            <StyleWithProps
              key={index}
              backgroundColor="lavender"
              color="purple"
              userName={user.userName}
              phoneNumber={user.phoneNumber}
              email={user.email}
              address={user.address}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  scrollContent: {
    padding: 16,
  },
  // Title styles
  mainTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "black",
    marginBottom: 24,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  // Section styles
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "dimgray",
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 16,
    color: "gray",
    marginBottom: 16,
    fontStyle: "italic",
  },
});

export default App;
