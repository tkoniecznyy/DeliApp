import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity
} from "react-native";
import HeaderX from "../components/HeaderX";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialButtonSuccess2 from "../components/MaterialButtonSuccess2";

function BasketOrderCacelled(props) {
  return (
    <View style={styles.root}>
      <StatusBar
        hidden
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
      />
      <HeaderX
        icon2Family="Feather"
        icon2Name="search"
        style={styles.headerX}
      ></HeaderX>
      <View style={styles.body}>
        <View style={styles.basketListStack}>
          <View style={styles.basketList}></View>
          <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            source={require("../assets/images/Gradient_YHxb2AV.png")}
          >
            <View style={styles.yourActualBasketRow}>
              <Text style={styles.yourActualBasket}>Your actual basket:</Text>
              <Icon name="md-cart" style={styles.icon}></Icon>
            </View>
            <Image
              source={require("../assets/images/cancelled.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.materialButtonSuccess2Stack}>
              <MaterialButtonSuccess2
                style={styles.materialButtonSuccess2}
              ></MaterialButtonSuccess2>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("FirstScene")}
                style={styles.button}
              ></TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.rect2}>
            <Text style={styles.loremIpsum}>Your order was cacelled !</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
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
    shadowRadius: 5
  },
  body: {
    flex: 1
  },
  basketList: {
    top: 80,
    left: 0,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    bottom: 0
  },
  rect: {
    top: 77,
    left: 0,
    width: 360,
    height: 483,
    position: "absolute"
  },
  rect_imageStyle: {},
  yourActualBasket: {
    fontFamily: "impact-regular",
    color: "#121212",
    height: 24,
    width: 143,
    marginTop: 10
  },
  icon: {
    color: "rgba(182,138,197,1)",
    fontSize: 40,
    height: 44,
    width: 32,
    marginLeft: 164
  },
  yourActualBasketRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 12,
    marginRight: 9
  },
  image: {
    width: 339,
    height: 306,
    marginTop: 21,
    marginLeft: 12
  },
  materialButtonSuccess2: {
    height: 36,
    width: 224,
    position: "absolute",
    left: 0,
    top: 0
  },
  button: {
    top: 0,
    left: 0,
    width: 224,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  materialButtonSuccess2Stack: {
    width: 224,
    height: 36,
    marginTop: 5,
    marginLeft: 59
  },
  rect2: {
    top: 0,
    left: 0,
    width: 360,
    height: 78,
    position: "absolute",
    backgroundColor: "rgba(253,0,0,0.83)"
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 18,
    marginTop: 31,
    marginLeft: 94
  },
  basketListStack: {
    flex: 1
  }
});

export default BasketOrderCacelled;
