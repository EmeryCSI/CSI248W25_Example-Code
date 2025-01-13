// App.js
import React from "react";
import { SafeAreaView, ScrollView, Text, StyleSheet } from "react-native";
import UserCard from "./components/UserCard";
import StyledInComponent from "./components/StyledInComponent";
import StyleWithProps from "./components/StyleWithProps";

const App = () => {
  const users = [
    {
      userName: "john_doe",
      phoneNumber: "123-456-7890",
      email: "john@example.com",
      address: "123 Main Street, Cityville",
    },
    {
      userName: "jane_smith",
      phoneNumber: "987-654-3210",
      email: "jane@example.com",
      address: "456 Elm Street, Townsville",
    },
    {
      userName: "bob_jackson",
      phoneNumber: "555-123-4567",
      email: "bob@example.com",
      address: "789 Oak Street, Villageton",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>App</Text>

        <UserCard
          userName="test user"
          phoneNumber="123-456-7890"
          email="none@none.com"
          address="123 anywhere lane"
        />

        <StyledInComponent
          userName="test user"
          phoneNumber="123-456-7890"
          email="none@none.com"
          address="123 anywhere lane"
        />

        <StyleWithProps
          backgroundColor="darkBlue"
          color="white"
          userName="test user"
          phoneNumber="123-456-7890"
          email="none@none.com"
          address="123 anywhere lane"
        />

        {users.map((user, index) => (
          <UserCard
            key={index}
            userName={user.userName}
            phoneNumber={user.phoneNumber}
            email={user.email}
            address={user.address}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 16,
  },
});

export default App;
