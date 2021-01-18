import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonBlueTextColor1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.letsGoToCheckout}>Let&#39;s go to checkout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5
  },
  letsGoToCheckout: {
    color: "rgba(0,255,207,1)",
    fontSize: 17,
    fontFamily: "roboto-700"
  }
});

export default CupertinoButtonBlueTextColor1;
