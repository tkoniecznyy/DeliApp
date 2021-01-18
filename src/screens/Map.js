import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import HeaderX from "../components/HeaderX";
import { Center } from "@builderx/utils";
import Icon from "react-native-vector-icons/Entypo";
import CupertinoButtonInfo1 from "../components/CupertinoButtonInfo1";
import MaterialMapView from "../components/MaterialMapView";

function Map(props) {
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
          <Center vertical>
            <ImageBackground
              style={styles.rect}
              imageStyle={styles.rect_imageStyle}
              source={require("../assets/images/Gradient_YHxb2AV.png")}
            >
              <View style={styles.iconStack}>
                <Icon name="align-left" style={styles.icon}></Icon>
                <TouchableOpacity style={styles.button}>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Categories")}
                    style={styles.button2}
                  ></TouchableOpacity>
                </TouchableOpacity>
                <CupertinoButtonInfo1
                  style={styles.cupertinoButtonInfo1}
                ></CupertinoButtonInfo1>
              </View>
              <MaterialMapView style={styles.materialMapView}></MaterialMapView>
            </ImageBackground>
          </Center>
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
    left: 0,
    width: 360,
    height: 560,
    position: "absolute"
  },
  rect_imageStyle: {},
  icon: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 46,
    width: 40
  },
  button: {
    top: 0,
    left: 0,
    width: 151,
    height: 46,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  button2: {
    width: 138,
    height: 36,
    backgroundColor: "#E6E6E6",
    opacity: 0,
    marginTop: 5
  },
  cupertinoButtonInfo1: {
    height: 36,
    width: 98,
    position: "absolute",
    left: 40,
    top: 5
  },
  iconStack: {
    width: 151,
    height: 46,
    marginTop: 11,
    marginLeft: 42
  },
  materialMapView: {
    width: 360,
    height: 494,
    marginTop: 9
  },
  basketListStack: {
    flex: 1
  }
});

export default Map;
