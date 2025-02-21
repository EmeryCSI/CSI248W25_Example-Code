import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import React from "react";

export default function ThemeColors() {
  //We access the theme with the useTheme hook
  const theme = useTheme();
  const commonColors = [
    { name: "Primary", value: theme.colors.primary },
    { name: "Secondary", value: theme.colors.secondary },
    { name: "Error", value: theme.colors.error },
    { name: "Background", value: theme.colors.background },
    { name: "Surface", value: theme.colors.surface },
    { name: "On Surface", value: theme.colors.onSurface },
  ];
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Theme Colors</Text>
      {commonColors.map(({ name, value }) => (
        <View key={name} style={styles.colorRow}>
          <View style={[styles.colorSwatch, { backgroundColor: value }]}></View>
          <View style={styles.colorInfo}>
            <Text>{name}</Text>
            <Text>{value}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    marginBottom: 16,
  },
  colorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  colorSwatch: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  colorInfo: {
    flex: 1,
  },
});
