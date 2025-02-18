import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import * as Device from "expo-device";

export default function DeviceScreen() {
  //get the device info and store in a state variable
  const [deviceInfo, setDeviceInfo] = useState(null);
  //access the device info from an Effect
  //this effect will run once on page load
  useEffect(() => {
    getDeviceInfo();
  }, []);
  //This is the function that the effect calls
  const getDeviceInfo = async () => {
    const info = {
      brand: Device.brand,
      modelName: Device.modelName,
      osName: Device.osName,
      osVersion: Device.osVersion,
      deviceType: Device.deviceType,
      totalMemory: Device.totalMemory,
    };
    setDeviceInfo(info);
  };
  //check to see if deviceinfo has a value
  if (!deviceInfo) {
    return <Text>...Loading device info</Text>;
  }
  return (
    <View>
      <Text>Device Information</Text>
      <View>
        <Text>Brand: {deviceInfo.brand}</Text>
        <Text>Model Name: {deviceInfo.modelName}</Text>
        <Text>OS: {deviceInfo.osName}</Text>
        <Text>Version: {deviceInfo.osVersion}</Text>
        <Text>Type: {deviceInfo.deviceType}</Text>
        <Text>Memory: {deviceInfo.totalMemory}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
