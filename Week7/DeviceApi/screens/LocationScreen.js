import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function LocationScreen() {
  //three things tracked from state
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  //Location is API which requires permission
  useEffect(() => {
    //This is an anonymous function created inline and called at the same time
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission Denied");
        return;
      }
    })();
  }, []);

  //lets make a function that gets their location
  //we get a location in LAT and LONG
  const getLocation = async () => {
    //get their location
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    //lat and long are located inside of a coords object
    //we can use the coords to get an address reverse geocode
    //This technique has been deprecated
    const [address] = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    setAddress(address);
  };
  return (
    <View>
      <Text>LocationScreen</Text>
      <Button title="Get Current Location" onPress={getLocation}></Button>
      {/* error message */}
      {errorMsg && <Text>ERROR: {errorMsg}</Text>}
      {/* location */}
      {location && (
        <View>
          <Text>Latitude: {location.coords.latitude}</Text>
          <Text>Longitude: {location.coords.longitude}</Text>
        </View>
      )}
      {address && (
        <View>
          <Text>
            Address: {address.street}, {address.city}, {address.region}
          </Text>
        </View>
      )}

      {/* address */}
    </View>
  );
}

const styles = StyleSheet.create({});
