import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
//You always bring in the container
import { NavigationContainer } from "@react-navigation/native";
//Then you bring in the specific nav - Screen
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./screens/DetailsScreen";
import AboutScreen from "./screens/AboutScreen";

//get the stack from the create function
const Stack = createNativeStackNavigator();

//navigation prop
//this is provided automatically to any screens in the navigator
function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Text>This is the Home page</Text>
      {/* navigate("name of screen to switch to") */}
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      ></Button>
    </View>
  );
}

export default function App() {
  return (
    //Wrap the entire application in a NavContainer
    <NavigationContainer>
      {/* Inside of here we need a Navigator, use Stack to create it */}
      {/* You can set options in the Navigator */}
      <Stack.Navigator
        initialRouteName="Home"
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
        <Stack.Screen name="About" component={AboutScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
