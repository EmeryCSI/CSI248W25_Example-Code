import { StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import CarListItem from "./CarListItem";

export default function CarList({ cars }) {
  //return some UI for each item
  const renderItem = ({ item }) => <CarListItem car={item} />;
  //return a unique identifier
  const keyExtractor = (item) => item.id;
  //check to make sure cars passed
  console.log(cars);
  return (
    <FlatList
      data={cars}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      //contentContainerSyle we used for styling
      contentContainerStyle={styles.container}
      //initialNumToRender limit how many are rendered at once
      initialNumToRender={10}
      //maxrenderperbatch how many additional items rendered as they scroll
      maxToRenderPerBatch={5}
      //windowsize limits how many are shown
      windowSize={5}
      onEndReached={() => {
        console.log("Scrolled to end");
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
});
