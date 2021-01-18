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
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";

function ContactFormAfterSended(props) {
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
      <View style={styles.loremIpsumStack}>
        <Text style={styles.loremIpsum}>
          Thanks for reporting the problem! Our technical support department
          will answer you as soon as possible.{"\n"}
          {"\n"}Thank you for helping us improve the app!
        </Text>
        <Icon name="handshake-o" style={styles.icon}></Icon>
      </View>
      <View style={styles.materialButtonSuccess1Stack}>
        <MaterialButtonSuccess1
          style={styles.materialButtonSuccess1}
        ></MaterialButtonSuccess1>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("FirstScene")}
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
  loremIpsum: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 150,
    width: 305,
    textAlign: "center"
  },
  icon: {
    top: 110,
    left: 127,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40
  },
  loremIpsumStack: {
    width: 305,
    height: 150,
    marginTop: 268,
    marginLeft: 28
  },
  materialButtonSuccess1: {
    height: 36,
    width: 200,
    position: "absolute",
    left: 0,
    top: 0
  },
  button: {
    top: 0,
    left: 0,
    width: 200,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  materialButtonSuccess1Stack: {
    width: 200,
    height: 36,
    marginTop: 68,
    marginLeft: 76
  }
});

export default ContactFormAfterSended;
