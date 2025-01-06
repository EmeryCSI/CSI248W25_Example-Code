import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Title from "./components/Title";
import ComponentsAndJSX from "./components/ComponentsAndJSX";
import Props from "./components/Props";
import Styling from "./components/Styling";
import State from "./components/State";

// Embedded component
// An embedded component is a component that is embedded in another component.
// Typically components are seperated into different files
const EmbeddedComponent = () => (
  <View style={styles.embeddedComponent}>
    {/* Text is used for displaying text content */}
    <Text style={styles.embeddedText}>This is an embedded component!</Text>
  </View>
);

export default function App() {
  return (
    // View = Div in React Native
    <View style={styles.container}>
      <Title></Title>
      <ComponentsAndJSX></ComponentsAndJSX>
      <Props
        title="Understanding Props"
        description="Props allow you to pass data from a parent component to a child component"
      ></Props>
      <Styling></Styling>
      <State />
      <EmbeddedComponent />
    </View>
  );
}
//In React Native we style with a stylesheet object
// Styles using StyleSheet
const styles = StyleSheet.create({
  container: {
    // In React Native, flex: 1 makes the component expand to fill available space
    // This is similar to flex: 1 1 0% in CSS, but RN only uses the flex-grow value
    flex: 1,

    // In RN, flexDirection defaults to 'column' instead of 'row' like in CSS
    //flexDirection: "column", // This is the default, so it's not needed here

    backgroundColor: "#f0f0f0",

    // In RN, alignItems and justifyContent work similarly to CSS
    // but they're applied to the container, not the items themselves
    alignItems: "center", // Aligns children along the cross axis (horizontally in this case)
    justifyContent: "center", // Aligns children along the main axis (vertically in this case)

    // Padding works similarly to CSS, but RN doesn't support shorthand properties
    // You'd need to specify each side separately if you want different values
    padding: 20,
    //Lets give it a border so we can see it
    borderWidth: 5,
    borderColor: "#000",

    // Note: In RN, all dimensions are unitless and represent density-independent pixels
  },
  embeddedComponent: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  embeddedText: {
    fontSize: 16,
    color: "#333",
  },
});
