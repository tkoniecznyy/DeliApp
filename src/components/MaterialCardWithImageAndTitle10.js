import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Switch } from "react-native";

function MaterialCardWithImageAndTitle10(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.kfc}>KFC</Text>
          <Text style={styles.subtitleStyle}>
            Big Family Box Meal:{"\n"}- 6x spicy Strips{"\n"}- 8x chicken Wings
            {"\n"}- 2x Fries Box{"\n"}- Dipper (4x Dip - BBQ, garlic, spicy,
            mayo)
          </Text>
        </View>
        <Image
          source={require("../assets/images/logo_kfc_new1.jpg")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}>
        <View style={styles.rect}>
          <Text style={styles.loremIpsum}>39,99 PLN</Text>
        </View>
        <Switch
          value={false}
          disabled={false}
          trackColor={{ false: "rgba(230, 230, 230,1)" }}
          style={styles.switch}
        ></Switch>
        <Text style={styles.addToBasket}>Add to basket</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
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
    height: 116,
    width: 357,
    marginTop: -1,
    marginLeft: 1
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
    height: 109,
    width: 145,
    margin: 16
  },
  actionBody: {
    flexDirection: "row",
    height: 38,
    width: 357,
    marginTop: 29,
    marginLeft: 1
  },
  rect: {
    width: 81,
    height: 29,
    backgroundColor: "#E6E6E6",
    marginLeft: 23,
    marginTop: 5
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6,
    marginLeft: 9
  },
  switch: {
    marginLeft: 100,
    marginTop: 8
  },
  addToBasket: {
    fontFamily: "roboto-700",
    color: "rgba(0,113,22,1)",
    marginLeft: 12,
    marginTop: 11
  }
});

export default MaterialCardWithImageAndTitle10;
