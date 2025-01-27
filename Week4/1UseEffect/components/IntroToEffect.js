import { StyleSheet, Text, View, Button } from "react-native";
//1 import useEffect
import { useState, useEffect } from "react";

export default function IntroToEffect() {
  //count variable tracked by state
  const [count, setCount] = useState(0);
  //useEffect is a hook that allows for you to perform "Side Effect" in your components
  //side effects are actions that interact with a third party library
  //useEffect takes 2 things and an optional 3rd
  //1. A function to run when the effect is triggers
  //2. A dependency array that determines WHEN the effect will trigger
  //3. Optional Cleanup function

  //Dependency Array
  //1. Empty array = Effect will run once after the Initial Render of the component
  //2. No Array = Runs ON EVERY render - Most APIS bill per request
  //3. Dependency Array has some values - The effect runs when one of those values changes
  useEffect(() => {
    console.log("effect running");
    console.log(`Count is ${count}`);
    //optional cleanup function
    //if you return a function from useEffect()
    //if will be called at the end of the effect running
    return () => {
      console.log("Cleanup running");
    };
  }, [count]);
  return (
    <View>
      <Text>IntroToEffect</Text>
      <Text>Count: {count}</Text>
      {/* We cannot do this it creates an infinite loop */}
      {/* <Button title="Increment" onPress={setCount(count + 1)}></Button> */}
      <Button title="Increment" onPress={() => setCount(count + 1)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({});
