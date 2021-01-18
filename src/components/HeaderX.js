import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";

function HeaderX(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconRow}>
        <MaterialIconsIcon
          name="dehaze"
          style={styles.icon}
        ></MaterialIconsIcon>
        <Image
          source={require("../assets/images/logo_mini_adobe_xd@3x.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.iconRowFiller}></View>
      <TouchableOpacity /* Conditional navigation not supported at the moment */
        onPress={() => console.log("Navigate to Settings")}
        style={styles.button}
      >
        <FeatherIcon
          name={props.icon2Name || "settings"}
          style={styles.icon2}
        ></FeatherIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(31,178,204,1)",
    flexDirection: "row"
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    width: 18,
    height: 25,
    marginTop: 31
  },
  image: {
    width: 163,
    height: 71,
    marginLeft: 74
  },
  iconRow: {
    height: 71,
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 9
  },
  iconRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    width: 25,
    height: 25,
    marginRight: 10,
    marginTop: 40
  },
  icon2: {
    color: "rgba(250,250,250,1)",
    fontSize: 25
  }
});

export default HeaderX;
