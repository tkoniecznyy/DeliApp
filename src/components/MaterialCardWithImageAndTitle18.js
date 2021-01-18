import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Switch } from "react-native";

function MaterialCardWithImageAndTitle18(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.pizzaHut}>Pizza Hut</Text>
          <Text style={styles.subtitleStyle}>
            BBQ Pizza:{"\n"}BBQ Sauce, Spicy Pork, {"\n"}Ham, Pepperoni,
            Seasoned Minced Beef{"\n"}+ 1,5 Litre Pepsi MAX
          </Text>
        </View>
        <Image
          source={require("../assets/images/pizaahut_logo.jpg")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}></View>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>38,00 PLN</Text>
      </View>
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
    overflow: "hidden",
    flexDirection: "row"
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between"
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
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 82,
    width: 96,
    margin: 16
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  rect: {
    top: 135,
    left: 17,
    width: 76,
    height: 25,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5,
    marginLeft: 6
  },
  switch: {
    position: "absolute",
    top: 137,
    left: 196
  },
  addToBasket: {
    top: 141,
    left: 252,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(37,109,21,1)"
  }
});

export default MaterialCardWithImageAndTitle18;
