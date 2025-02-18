import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import React from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useState, useRef } from "react";

//Camera gives us a component that shows a preview of what the device camera is pointed at
//1. Get permissions with UseCamerPermission
//2. CameraView to show the camera
//3. CameraType is used to switch from front to back
//4. takePictureAsync to capture photos

export default function CameraScreen() {
  const [permission, setPermission] = useCameraPermissions();
  const [facing, setFacing] = useState("back");
  const [photo, setPhoto] = useState(null);
  //this react for document.getelementbyID
  //direct access to a component outside of the normal react ecosystem
  const cameraRef = useRef(null);

  if (!permission) {
    return (
      <View>
        <Text>Waiting for permissions</Text>
        <Button title="Request Permission" onPress={setPermission}></Button>
      </View>
    );
  }
  if (!permission.granted) {
    return (
      <View>
        <Text>You did not give Camera Permission</Text>
        <Button title="Request Permission" onPress={setPermission}></Button>
      </View>
    );
  }
  //toggle camera front to back
  const toggleCameraFacing = () => {
    //take in the current value, if back set to front else back
    setFacing((currentValue) => (currentValue === "back" ? "front" : "back"));
  };
  //function that takes a picture, use the cameraRef
  const takePicture = async () => {
    //you access the component the ref is associated by using current
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo);
    }
  };
  return (
    <View style={styles.container}>
      {/* useRef gets you direct access to a component. its commonly
        used to capture images or any componet that is changing quickly */}
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      {photo && <Image source={{ uri: photo.uri }} style={styles.preview} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  text: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  preview: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 10,
  },
});
