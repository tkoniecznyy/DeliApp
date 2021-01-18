import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonSuccess(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.acceptOrder}>ACCEPT &amp; ORDER</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4CD964",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16
  },
  acceptOrder: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "roboto-700"
  }
});

export default CupertinoButtonSuccess;
