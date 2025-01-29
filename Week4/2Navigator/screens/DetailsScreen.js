import { StyleSheet, Text, View, Button } from "react-native";
import Item from "../components/item";

export default function DetailsScreen({ route, navigation }) {
  const { itemId, itemDetails } = route.params;

  return (
    <View>
      <Text>DetailsScreen</Text>
      <Item itemId={itemId} itemDetails={itemDetails} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}
