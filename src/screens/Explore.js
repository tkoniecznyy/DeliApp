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
import MaterialButtonShare from "../components/MaterialButtonShare";
import CupertinoButtonLight from "../components/CupertinoButtonLight";
import CupertinoButtonInfo2 from "../components/CupertinoButtonInfo2";
import MaterialCardWithContentAndActionButtons1 from "../components/MaterialCardWithContentAndActionButtons1";

function Explore(props) {
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
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Categories")}
                style={styles.popular}
              >
                <Text style={styles.categories5}>Categories</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Basket")}
                style={styles.button}
              >
                <Text style={styles.yourBasket2}>Your Basket</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.following}>
                <Text style={styles.text}>Explore</Text>
              </TouchableOpacity>
            </View>
            <ImageBackground
              style={styles.rect}
              imageStyle={styles.rect_imageStyle}
              source={require("../assets/images/Gradient_YHxb2AV.png")}
            >
              <View style={styles.materialButtonShareRow}>
                <MaterialButtonShare
                  style={styles.materialButtonShare}
                ></MaterialButtonShare>
                <Text style={styles.loremIpsum}>
                  Please follow us on our social medias to get more codes :)
                </Text>
                <View style={styles.cupertinoButtonLightStackColumn}>
                  <View style={styles.cupertinoButtonLightStack}>
                    <CupertinoButtonLight
                      style={styles.cupertinoButtonLight}
                    ></CupertinoButtonLight>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Feedback")}
                      style={styles.button2}
                    ></TouchableOpacity>
                  </View>
                  <View style={styles.cupertinoButtonInfo2Stack}>
                    <CupertinoButtonInfo2
                      style={styles.cupertinoButtonInfo2}
                    ></CupertinoButtonInfo2>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate("Map")}
                      style={styles.button3}
                    ></TouchableOpacity>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <MaterialCardWithContentAndActionButtons1
              style={styles.materialCardWithContentAndActionButtons1}
            ></MaterialCardWithContentAndActionButtons1>
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
  categories5: {
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
  yourBasket2: {
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
  text: {
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
  materialButtonShare: {
    height: 56,
    width: 56,
    marginTop: 32
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 86,
    width: 95,
    marginLeft: 22,
    marginTop: 22
  },
  cupertinoButtonLight: {
    height: 44,
    width: 136,
    position: "absolute",
    left: 0,
    top: 0
  },
  button2: {
    top: 0,
    left: 0,
    width: 136,
    height: 44,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  cupertinoButtonLightStack: {
    width: 136,
    height: 44
  },
  cupertinoButtonInfo2: {
    height: 44,
    width: 100,
    position: "absolute",
    left: 0,
    top: 4
  },
  button3: {
    top: 0,
    left: 0,
    width: 100,
    height: 48,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  cupertinoButtonInfo2Stack: {
    width: 100,
    height: 48,
    marginTop: 16,
    marginLeft: 36
  },
  cupertinoButtonLightStackColumn: {
    width: 136,
    marginLeft: 19
  },
  materialButtonShareRow: {
    height: 108,
    flexDirection: "row",
    marginTop: 364,
    marginLeft: 14,
    marginRight: 18
  },
  materialCardWithContentAndActionButtons1: {
    height: 357,
    width: 359,
    position: "absolute",
    left: 1,
    top: 75
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

export default Explore;
