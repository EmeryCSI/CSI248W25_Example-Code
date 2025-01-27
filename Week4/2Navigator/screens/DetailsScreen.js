import { StyleSheet, Text, View, Button } from "react-native";

export default function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text>DetailsScreen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}
