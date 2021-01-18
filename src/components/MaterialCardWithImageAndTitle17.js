import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

function MaterialCardWithImageAndTitle17(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.pizzaHut}>Pizza Hut</Text>
          <Text style={styles.bbqMeatFeast}>BBQ Meat Feast:</Text>
        </View>
        <Image
          source={require("../assets/images/cardImage25.png")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.actionText1}>ACTION 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.actionText2}>ACTION 2</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        BBQ Sauce, Spicy Pork, Ham, Pepperoni, Seasoned Minced Beef
      </Text>
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
    left: -1,
    width: 357,
    top: 0,
    height: 112
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  pizzaHut: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  bbqMeatFeast: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 80,
    width: 80,
    margin: 16
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  actionText1: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    height: 36
  },
  actionText2: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  text: {
    top: 82,
    left: 16,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14
  }
});

export default MaterialCardWithImageAndTitle17;
