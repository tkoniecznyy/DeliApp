import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function MaterialCardWithImageAndTitle7(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.kfc}>KFC</Text>
          <Text style={styles.subtitleStyle}>
            Big Family Meal Box:{"\n"}- 6x spicy strips{"\n"}- 8x wings
          </Text>
        </View>
        <Image
          source={require("../assets/images/cardImage13.png")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 357,
    top: -1,
    height: 112,
    left: 0,
    flex: "null"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  kfc: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 80,
    width: 80,
    margin: 16,
    left: 199,
    top: 52
  }
});

export default MaterialCardWithImageAndTitle7;
