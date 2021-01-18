import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterialHelperTextBox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.promoCode}>Promo Code</Text>
      <TextInput placeholder="Input" style={styles.inputStyle}></TextInput>
      <Text style={styles.helper}>
        If you have any promocotion code - wrtite it there, and then click
        &quot;USE CODE&quot; button
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  promoCode: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
    left: 0,
    width: 163,
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
  helper: {
    fontSize: 10,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 8,
    left: 0,
    width: 299,
    top: 64,
    height: 26
  }
});

export default MaterialHelperTextBox;
