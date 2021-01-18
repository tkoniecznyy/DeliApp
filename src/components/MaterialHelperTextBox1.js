import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialHelperTextBox1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.weAreToHelpYou}>
        We are to help you - please write to us what is your problem
      </Text>
      <TextInput placeholder="Input" style={styles.inputStyle}></TextInput>
      <Text style={styles.helperTextW}>
        Our Team will response to you ASAP, thanks for your time ;)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  weAreToHelpYou: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
    left: 0,
    width: 364,
    top: 0,
    height: 30
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    lineHeight: 16,
    paddingTop: 8,
    flex: 1,
    paddingBottom: 8,
    width: 375
  },
  helperTextW: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 8,
    left: 0,
    width: 233,
    top: 68,
    height: 36
  }
});

export default MaterialHelperTextBox1;
