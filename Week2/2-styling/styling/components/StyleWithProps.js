import React from "react";
import { View, Text, StyleSheet } from "react-native";

const StyleWithProps = (props) => {
  console.log(props);
  return (
    <View style={[styles.card, { backgroundColor: props.backgroundColor }]}>
      <Text style={[styles.title, { color: props.color }]}>
        {props.userName}
      </Text>
      <View style={styles.cardBody}>
        <Text style={[styles.label, { color: props.color }]}>Email:</Text>
        <Text style={{ color: props.color }}>{props.email}</Text>
        <Text style={[styles.label, { color: props.color }]}>Phone:</Text>
        <Text style={{ color: props.color }}>{props.phoneNumber}</Text>
        <Text style={[styles.label, { color: props.color }]}>Address:</Text>
        <Text style={{ color: props.color }}>{props.address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cardBody: {
    gap: 4,
  },
  label: {
    fontWeight: "600",
    marginTop: 4,
  },
});

export default StyleWithProps;
