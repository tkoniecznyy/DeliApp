import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialCard123 from "../components/MaterialCard123";
import MaterialCardWithImageAndTitle18 from "../components/MaterialCardWithImageAndTitle18";
import HeaderX from "../components/HeaderX";
import CupertinoButtonWarning from "../components/CupertinoButtonWarning";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialButtonLight from "../components/MaterialButtonLight";

function PizzaMenu(props) {
  return (
    <View style={styles.root}>
      <StatusBar
        hidden
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
      />
      <View style={styles.followersStackStack}>
        <View style={styles.followersStack}>
          <Text style={styles.followers}>777K Followers</Text>
          <MaterialCard123 style={styles.materialCard123}></MaterialCard123>
          <MaterialCardWithImageAndTitle18
            style={styles.materialCardWithImageAndTitle18}
          ></MaterialCardWithImageAndTitle18>
        </View>
        <HeaderX style={styles.headerX}></HeaderX>
      </View>
      <TouchableOpacity style={styles.button}>
        <View style={styles.cupertinoButtonWarningStack}>
          <CupertinoButtonWarning
            style={styles.cupertinoButtonWarning}
          ></CupertinoButtonWarning>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Basket")}
            style={styles.button2}
          ></TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={styles.iconRow}>
        <Icon name="pizza" style={styles.icon}></Icon>
        <View style={styles.materialButtonLightStack}>
          <MaterialButtonLight
            style={styles.materialButtonLight}
          ></MaterialButtonLight>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Categories")}
            style={styles.button3}
          ></TouchableOpacity>
        </View>
      </View>
      <Text style={styles.pizzaMenu}>Pizza Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  followers: {
    top: 185,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    left: 122
  },
  materialCard123: {
    height: 230,
    width: 359,
    position: "absolute",
    left: 2,
    top: 0
  },
  materialCardWithImageAndTitle18: {
    height: 166,
    width: 359,
    position: "absolute",
    left: 0,
    top: 229
  },
  followersStack: {
    top: 78,
    left: 0,
    width: 361,
    height: 395,
    position: "absolute"
  },
  headerX: {
    top: 0,
    left: 1,
    height: 80,
    position: "absolute",
    right: 0,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  followersStackStack: {
    height: 473,
    marginLeft: -1
  },
  button: {
    width: 221,
    height: 56,
    backgroundColor: "#E6E6E6",
    marginTop: 99,
    marginLeft: 73
  },
  cupertinoButtonWarning: {
    height: 56,
    width: 221,
    position: "absolute",
    left: 0,
    top: 0
  },
  button2: {
    top: 0,
    left: 0,
    width: 221,
    height: 56,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  cupertinoButtonWarningStack: {
    width: 221,
    height: 56
  },
  icon: {
    color: "rgba(13,151,155,1)",
    fontSize: 40
  },
  materialButtonLight: {
    height: 36,
    width: 158,
    position: "absolute",
    left: 0,
    top: 0
  },
  button3: {
    top: 0,
    left: 0,
    width: 157,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  materialButtonLightStack: {
    width: 158,
    height: 36,
    marginLeft: 129,
    marginTop: 8
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: -146,
    marginLeft: 33
  },
  pizzaMenu: {
    fontFamily: "roboto-700",
    color: "rgba(13,151,155,1)",
    marginLeft: 33
  }
});

export default PizzaMenu;
