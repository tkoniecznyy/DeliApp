import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Switch } from "react-native";

function MaterialCard123(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.pizzaExpress}>Pizza Express</Text>
          <Text style={styles.polloAdAstra}>
            Pollo ad Astra:{"\n"}Chicken, {"\n"}sweet red peppers, {"\n"}red
            onion, mozzarella, {"\n"}tomato, {"\n"}Cajun spices and garlic oil
            on a Romana base.{"\n"}+Dough Balls x12 with garlic oil
          </Text>
        </View>
        <Image
          source={require("../assets/images/pizzaExpress_logo.jpg")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <View style={styles.actionBody}></View>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>45,00 PLN</Text>
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
    justifyContent: "space-between",
    left: 0,
    width: 357,
    top: -1,
    height: 192
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1
  },
  pizzaExpress: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  polloAdAstra: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 114,
    width: 122,
    margin: 16
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  rect: {
    top: 192,
    left: 14,
    width: 98,
    height: 27,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5,
    marginLeft: 17
  },
  switch: {
    position: "absolute",
    top: 192,
    left: 198
  },
  addToBasket: {
    top: 196,
    left: 250,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(37,109,21,1)"
  }
});

export default MaterialCard123;
