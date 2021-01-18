import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";
import MaterialCard12 from "../components/MaterialCard12";
import HeaderX from "../components/HeaderX";
import CupertinoButtonWarning from "../components/CupertinoButtonWarning";
import MaterialCardWithImageAndTitle10 from "../components/MaterialCardWithImageAndTitle10";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialButtonLight from "../components/MaterialButtonLight";

function FastFoodMenu(props) {
  return (
    <View style={styles.root}>
      <StatusBar
        hidden
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
      />
      <View style={styles.scienceChannelStackStack}>
        <View style={styles.scienceChannelStack}>
          <Text style={styles.scienceChannel}>TECHNOLOGY</Text>
          <MaterialCard12 style={styles.materialCard12}></MaterialCard12>
        </View>
        <Text style={styles.followers}>777K Followers</Text>
      </View>
      <HeaderX style={styles.headerX}></HeaderX>
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
      <MaterialCardWithImageAndTitle10
        style={styles.materialCardWithImageAndTitle10}
      ></MaterialCardWithImageAndTitle10>
      <View style={styles.iconRow}>
        <Icon name="food" style={styles.icon}></Icon>
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
      <Text style={styles.text}>Fast-Food Menu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  scienceChannel: {
    top: 42,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24,
    left: 98
  },
  materialCard12: {
    height: 199,
    width: 359,
    position: "absolute",
    left: 0,
    top: 0
  },
  scienceChannelStack: {
    top: 0,
    left: 0,
    width: 359,
    height: 199,
    position: "absolute"
  },
  followers: {
    top: 182,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    left: 121
  },
  scienceChannelStackStack: {
    width: 359,
    height: 200,
    marginTop: 81
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
    marginTop: -281
  },
  button: {
    width: 221,
    height: 56,
    backgroundColor: "#E6E6E6",
    marginTop: 492,
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
  materialCardWithImageAndTitle10: {
    height: 187,
    width: 359,
    marginTop: -347
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
    marginTop: 14,
    marginLeft: 33
  },
  text: {
    fontFamily: "roboto-700",
    color: "rgba(13,151,155,1)",
    marginLeft: 33
  }
});

export default FastFoodMenu;
