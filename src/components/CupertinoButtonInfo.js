import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function CupertinoButtonInfo(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.newOrder}>NEW ORDER</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(93,166,246,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    paddingLeft: 16,
    paddingRight: 16,
    opacity: 0.9,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 6,
    shadowOpacity: 0.48,
    shadowRadius: 2
  },
  newOrder: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "roboto-500italic",
    width: 110,
    textAlign: "center"
  }
});

export default CupertinoButtonInfo;
