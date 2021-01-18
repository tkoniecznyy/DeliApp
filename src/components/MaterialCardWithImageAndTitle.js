import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import MaterialButtonPrimary1 from "./MaterialButtonPrimary1";

function MaterialCardWithImageAndTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.pizzaHut}>Pizza Hut</Text>
          <Text style={styles.prosciuttoERucola}>Prosciutto e&#39; rucola</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.actionButton1}></TouchableOpacity>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.loremIpsum2}>31,99 PLN</Text>
        </View>
        <View style={styles.loremIpsumStack}>
          <Text style={styles.loremIpsum}>
            Ingredients:{"\n"}tomato sauce, mozzarella, cherry tomatoes,
            corregio, arugula, fresh mozzarella, ripening ham
          </Text>
          <Image
            source={require("../assets/images/logo_pizzahut.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
        </View>
        <MaterialButtonPrimary1
          style={styles.materialButtonPrimary1}
        ></MaterialButtonPrimary1>
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
    left: 0,
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
  prosciuttoERucola: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  rect: {
    top: 124,
    left: 8,
    width: 75,
    height: 31,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 8,
    marginLeft: 6
  },
  loremIpsum: {
    top: 83,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 30,
    width: 231,
    fontSize: 8
  },
  image: {
    top: 0,
    left: 210,
    width: 131,
    height: 127,
    position: "absolute"
  },
  button: {
    top: 124,
    left: 231,
    width: 101,
    height: 37,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  loremIpsumStack: {
    top: 0,
    left: 0,
    width: 341,
    height: 161,
    position: "absolute"
  },
  materialButtonPrimary1: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 231,
    top: 124
  },
  rectStack: {
    top: -1,
    left: 16,
    width: 341,
    height: 161,
    position: "absolute"
  }
});

export default MaterialCardWithImageAndTitle;
