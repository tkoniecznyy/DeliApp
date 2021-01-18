import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import HeaderX from "../components/HeaderX";
import MaterialHelperTextBox1 from "../components/MaterialHelperTextBox1";
import MaterialButtonPrimary3 from "../components/MaterialButtonPrimary3";

function ContactForm(props) {
  return (
    <View style={styles.root}>
      <StatusBar
        hidden
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
      />
      <View style={styles.followersStack}>
        <Text style={styles.followers}>777K Followers</Text>
        <Image
          source={require("../assets/images/contact_us_photo.jpg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <HeaderX style={styles.headerX}></HeaderX>
      <MaterialHelperTextBox1
        style={styles.materialHelperTextBox1}
      ></MaterialHelperTextBox1>
      <View style={styles.materialButtonPrimary3Stack}>
        <MaterialButtonPrimary3
          style={styles.materialButtonPrimary3}
        ></MaterialButtonPrimary3>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ContactFormAfterSended")}
          style={styles.button}
        ></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  followers: {
    top: 183,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    left: 121
  },
  image: {
    top: 0,
    left: 0,
    width: 360,
    height: 237,
    position: "absolute"
  },
  followersStack: {
    width: 360,
    height: 237,
    marginTop: 80
  },
  headerX: {
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginTop: -317
  },
  materialHelperTextBox1: {
    height: 90,
    width: 375,
    marginTop: 255,
    marginLeft: 12
  },
  materialButtonPrimary3: {
    height: 36,
    width: 169,
    position: "absolute",
    left: 0,
    top: 0
  },
  button: {
    top: 0,
    left: 0,
    width: 169,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  materialButtonPrimary3Stack: {
    width: 169,
    height: 36,
    marginTop: 81,
    marginLeft: 180
  }
});

export default ContactForm;
