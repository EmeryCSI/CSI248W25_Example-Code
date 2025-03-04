# React Native Reanimated Installation Guide for Expo Projects

This guide provides step-by-step instructions for installing and configuring React Native Reanimated in an Expo project.

## Prerequisites

- An existing Expo project
- Node.js and npm/yarn installed
- Expo CLI installed globally (`npm install -g expo-cli`)

## Step 1: Install the Reanimated package

Install the React Native Reanimated package using Expo's installation method:

```bash
npx expo install react-native-reanimated
```

This ensures you get a version compatible with your Expo SDK version.

## Step 2: Generate configuration files (if they don't exist)

If your project doesn't already have customized `babel.config.js` and `metro.config.js` files, you'll need to generate them:

```bash
npx expo customize metro.config.js
npx expo customize babel.config.js
```

This will create the configuration files with Expo's default settings.

## Step 3: Update babel.config.js

Open the `babel.config.js` file and add the Reanimated plugin to the plugins array:

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Other plugins might be here
      "react-native-reanimated/plugin", // Add this line (must be last in the plugins array)
    ],
  };
};
```

**Important**: The `react-native-reanimated/plugin` must be the last item in the plugins array.

## Step 4: Update metro.config.js

Open the `metro.config.js` file and wrap the default configuration with Reanimated's Metro config wrapper:

```javascript
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = wrapWithReanimatedMetroConfig(config);
```

## Step 5: Restart your development server

After making these configuration changes, you need to restart your development server with the cache cleared:

```bash
npx expo start --clear
```

## Step 6: Verify installation

To verify that Reanimated is properly installed, you can create a simple animation component:

```javascript
import React from "react";
import { View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export default function TestAnimation() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  React.useEffect(() => {
    offset.value = withSpring(100);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Animated.View
        style={[
          { width: 100, height: 100, backgroundColor: "blue" },
          animatedStyles,
        ]}
      />
      <Text style={{ marginTop: 20 }}>
        If the blue box moves, Reanimated is working!
      </Text>
    </View>
  );
}
```

## Troubleshooting

If you encounter issues:

1. **Ensure correct plugin order**: The Reanimated plugin must be the last item in the plugins array in `babel.config.js`.

2. **Clear cache**: Run `npx expo start --clear` to ensure all configuration changes are applied.

3. **Check dependencies**: Make sure you have all required dependencies:

   ```bash
   npx expo install react-native-reanimated react-native-gesture-handler
   ```

4. **Expo version compatibility**: Ensure your Reanimated version is compatible with your Expo SDK version.

5. **Rebuild the app**: For managed Expo projects, sometimes you need to completely restart the development server.

## Additional Resources

- [Official Reanimated Documentation](https://docs.swmansion.com/react-native-reanimated/)
- [Expo Documentation on Reanimated](https://docs.expo.dev/versions/latest/sdk/reanimated/)
