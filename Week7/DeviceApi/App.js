import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import DeviceScreen from "./screens/DeviceScreen";
import LocationScreen from "./screens/LocationScreen";
import StorageScreen from "./screens/StorageScreen";
import CameraScreen from "./screens/CameraScreen";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* screen options configures common options for the nagivator. A route object
      is povided to screen options. We can use the route object to set prefs for
      each screen */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          //tabBarIcon is a function that returns the icon for each tab
          //I can also return seperate icons based on whether the icon is
          //selected or not(focused)
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            //determine which icon to show based on the route
            if (route.name === "Device") {
              iconName = focused ? "phone-portrait" : "phone-portrait-outline";
            } else if (route.name === "Location") {
              iconName = focused ? "location" : "location-outline";
            } else if (route.name === "Storage") {
              iconName = focused ? "save" : "save-outline";
            } else if (route.name === "Camera") {
              iconName = focused ? "camera" : "camera-outline";
            }
            //Create an icon based on the iconName variable
            console.log(iconName);
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Device" component={DeviceScreen} />
        <Tab.Screen name="Location" component={LocationScreen} />
        <Tab.Screen name="Storage" component={StorageScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
