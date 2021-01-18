import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Switch } from "react-native";

function MaterialCard12(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.mcDonalds}>McDonald&#39;s</Text>
        <Text style={styles.mealBigMac}>
          Meal:{"\n"}- 1x Big Mac{"\n"}- 1x Fries (big){"\n"}- 6x McNuggets
          {"\n"}- 1x Coca-cola Light (330ml)
        </Text>
      </View>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>26,00 PLN</Text>
      </View>
      <Image
        source={require("../assets/images/logo_mcd.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <Switch
        value={false}
        trackColor={{ false: "rgba(230, 230, 230,1)" }}
        style={styles.switch}
      ></Switch>
      <Text style={styles.addToBasket}>Add to basket</Text>
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
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  mcDonalds: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  mealBigMac: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  rect: {
    top: 152,
    left: 23,
    width: 96,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 17,
    marginTop: 8,
    marginLeft: 9
  },
  image: {
    top: -7,
    left: 194,
    width: 163,
    height: 147,
    position: "absolute"
  },
  switch: {
    position: "absolute",
    top: 163,
    left: 213
  },
  addToBasket: {
    top: 167,
    left: 265,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(37,109,21,1)"
  }
});

export default MaterialCard12;
