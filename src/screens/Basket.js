import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  ImageBackground
} from "react-native";
import HeaderX from "../components/HeaderX";
import Icon from "react-native-vector-icons/Ionicons";
import CupertinoButtonSuccess from "../components/CupertinoButtonSuccess";
import CupertinoButtonDanger from "../components/CupertinoButtonDanger";

function Basket(props) {
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
        <View style={styles.tabsStackStack}>
          <View style={styles.tabsStack}>
            <View style={styles.tabs}>
              <TouchableOpacity style={styles.popular}>
                <Text style={styles.categories4}>Categories</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.following}>
                <Text style={styles.yourBasket}>Your Basket</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text3}>Explore</Text>
              </TouchableOpacity>
            </View>
            <ImageBackground
              style={styles.rect}
              imageStyle={styles.rect_imageStyle}
              source={require("../assets/images/Gradient_YHxb2AV.png")}
            >
              <View style={styles.yourActualBasketRow}>
                <Text style={styles.yourActualBasket}>Your actual basket:</Text>
                <Icon name="md-cart" style={styles.icon}></Icon>
              </View>
              <Text style={styles.loremIpsum}>
                example name;{"\t"}
                {"\t"}example price;{"\t"}
                {"\t"}del;{"\n"}
                {"\n"}example name;{"\t"}
                {"\t"}example price;{"\t"}
                {"\t"}del;{"\n"}
                {"\n"}example name;{"\t"}
                {"\t"}example price;{"\t"}
                {"\t"}del;{"\n"}
                {"\n"}example name;{"\t"}
                {"\t"}example price;{"\t"}
                {"\t"}del;{"\n"}
                {"\n"}example name;{"\t"}
                {"\t"}example price;{"\t"}
                {"\t"}del;{"\n"}
                {"\n"}example name;{"\t"}
                {"\t"}example price;{"\t"}
                {"\t"}del;{"\n"}
                {"\n"}example name;{"\t"}
                {"\t"}example price;{"\t"}
                {"\t"}del;{"\n"}
                {"\n"}example name;{"\t"}
                {"\t"}example price;{"\t"}
                {"\t"}del;{"\n"}
                {"\n"}example name;{"\t"}
                {"\t"}example price;{"\t"}
                {"\t"}del;
              </Text>
              <View style={styles.cupertinoButtonSuccessRow}>
                <CupertinoButtonSuccess
                  style={styles.cupertinoButtonSuccess}
                ></CupertinoButtonSuccess>
                <CupertinoButtonDanger
                  style={styles.cupertinoButtonDanger}
                ></CupertinoButtonDanger>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.basketList}></View>
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
  tabs: {
    top: 0,
    left: 0,
    height: 80,
    backgroundColor: "rgba(31,178,204,1)",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    right: 0,
    justifyContent: "space-around",
    elevation: 0,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowRadius: 0
  },
  popular: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    borderRadius: 100,
    justifyContent: "center"
  },
  categories4: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  following: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center"
  },
  yourBasket: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  button: {
    width: 100,
    height: 38,
    backgroundColor: "rgba(247,247,247,0)",
    alignSelf: "center",
    borderRadius: 100,
    justifyContent: "center"
  },
  text3: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
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
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 281,
    width: 307,
    marginTop: 20,
    marginLeft: 19
  },
  cupertinoButtonSuccess: {
    height: 44,
    width: 114
  },
  cupertinoButtonDanger: {
    height: 44,
    width: 100,
    marginLeft: 91
  },
  cupertinoButtonSuccessRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 49,
    marginLeft: 12,
    marginRight: 43
  },
  tabsStack: {
    top: 0,
    left: 0,
    height: 560,
    position: "absolute",
    right: 0
  },
  basketList: {
    top: 80,
    left: 0,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    bottom: 0
  },
  tabsStackStack: {
    flex: 1
  }
});

export default Basket;
