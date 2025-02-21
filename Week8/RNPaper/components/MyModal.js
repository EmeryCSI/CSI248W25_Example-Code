import { StyleSheet } from "react-native";
import { Portal, Modal } from "react-native-paper";
import React from "react";

export default function MyModal({ visible, onDismiss, children }) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modal}
      >
        {children}
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
});
