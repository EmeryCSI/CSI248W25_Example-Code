import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
//You always bring in the container
import { NavigationContainer } from "@react-navigation/native";
//Then you bring in the specific nav - Screen
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./screens/DetailsScreen";
import AboutScreen from "./screens/AboutScreen";

// Create a stack navigator
const Stack = createNativeStackNavigator();

// HomeScreen component
// This is the initial screen of the app
// It contains a button to navigate to the Details screen
function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Text>This is the Home page</Text>
      {/* navigate("name of screen to switch to") */}
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 86,
            itemDetails: "anything you want here",
          })
        }
      ></Button>
    </View>
  );
}

// App component
// This is the main component that wraps the entire application in a NavigationContainer
// It sets up the stack navigator and defines the screens
export default function App() {
  return (
    //Wrap the entire application in a NavContainer
    <NavigationContainer>
      {/* Inside of here we need a Navigator, use Stack to create it */}
      {/* You can set options in the Navigator */}
      <Stack.Navigator
        initialRouteName="Home"
        // Screenoptions is
        screenOptions={{
          headerStyle: {
            backgroundColor: "lightblue",
          },
        }}
      >
        {/* create your screens */}
        {/* A name and a component */}
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ title: "This is the About Screen" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
