import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function ScrollViewEntry(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.text2}>
        McDonalds - fast food (Burgers, fries, chicken nuggets etc.)
      </Text>
      <View style={styles.text2Filler}></View>
      <View style={styles.rect2}>
        <View style={styles.iconRow}>
          <IoniconsIcon name="ios-globe" style={styles.icon}></IoniconsIcon>
          <Text style={styles.text3}>mcdonalds.pl</Text>
          <EvilIconsIcon name="clock" style={styles.icon2}></EvilIconsIcon>
          <Text style={styles.text4}>Waiting time about 30min</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  text2: {
    width: 320,
    height: 56,
    color: "#121212",
    fontSize: 16,
    lineHeight: 20,
    marginTop: 5,
    marginLeft: 22
  },
  text2Filler: {
    flex: 1
  },
  rect2: {
    width: 274,
    height: 20,
    flexDirection: "row",
    marginBottom: 19,
    marginLeft: 22
  },
  icon: {
    color: "grey",
    fontSize: 18
  },
  text3: {
    color: "#121212",
    fontSize: 14,
    marginLeft: 16,
    marginTop: 2
  },
  icon2: {
    color: "grey",
    fontSize: 18,
    marginLeft: 26,
    marginTop: 2
  },
  text4: {
    color: "#121212",
    fontSize: 14,
    marginLeft: 5,
    marginTop: 3
  },
  iconRow: {
    height: 20,
    flexDirection: "row",
    flex: 1,
    marginRight: -58
  }
});

export default ScrollViewEntry;
