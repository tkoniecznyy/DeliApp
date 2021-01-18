import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import CupertinoButtonInfo from "../components/CupertinoButtonInfo";
import HeaderX from "../components/HeaderX";
import MaterialCard12 from "../components/MaterialCard12";
import CupertinoButtonWarning from "../components/CupertinoButtonWarning";

function FirstScene(props) {
  return (
    <View style={styles.root}>
      <StatusBar
        hidden
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
      />
      <View style={styles.scienceChannelStackStack}>
        <View style={styles.scienceChannelStack}>
          <Text style={styles.scienceChannel}>TECHNOLOGY</Text>
          <ImageBackground
            source={require("../assets/images/eat_main_screen.jpg")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <View style={styles.cupertinoButtonInfoStack}>
              <CupertinoButtonInfo
                style={styles.cupertinoButtonInfo}
              ></CupertinoButtonInfo>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Categories")}
                style={styles.button3}
              ></TouchableOpacity>
            </View>
            <Text style={styles.recommended}>Recommended:</Text>
          </ImageBackground>
        </View>
        <Text style={styles.followers}>777K Followers</Text>
        <HeaderX style={styles.headerX}></HeaderX>
      </View>
      <MaterialCard12 style={styles.materialCard12}></MaterialCard12>
      <TouchableOpacity style={styles.button}>
        <View style={styles.cupertinoButtonWarningStack}>
          <CupertinoButtonWarning
            style={styles.cupertinoButtonWarning}
          ></CupertinoButtonWarning>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Basket")}
            style={styles.button2}
          ></TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  scienceChannel: {
    top: 83,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24,
    left: 98
  },
  image: {
    top: 0,
    left: 0,
    width: 360,
    height: 320,
    position: "absolute"
  },
  image_imageStyle: {},
  cupertinoButtonInfo: {
    height: 44,
    width: 100,
    position: "absolute",
    left: 0,
    top: 0
  },
  button3: {
    top: 0,
    left: 0,
    width: 100,
    height: 44,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0.04
  },
  cupertinoButtonInfoStack: {
    width: 100,
    height: 44,
    marginTop: 201,
    marginLeft: 14
  },
  recommended: {
    fontFamily: "roboto-700italic",
    color: "#121212",
    height: 36,
    width: 245,
    textAlign: "center",
    fontSize: 18,
    marginTop: 39,
    marginLeft: 57
  },
  scienceChannelStack: {
    top: 40,
    left: 0,
    width: 360,
    height: 320,
    position: "absolute"
  },
  followers: {
    top: 263,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 16,
    left: 121
  },
  headerX: {
    top: 0,
    left: 0,
    height: 80,
    position: "absolute",
    right: 0,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  scienceChannelStackStack: {
    height: 360
  },
  materialCard12: {
    height: 199,
    width: 359,
    marginLeft: 1
  },
  button: {
    width: 221,
    height: 56,
    backgroundColor: "#E6E6E6",
    marginTop: 13,
    marginLeft: 73
  },
  cupertinoButtonWarning: {
    height: 56,
    width: 221,
    position: "absolute",
    left: 0,
    top: 0
  },
  button2: {
    top: 0,
    left: 0,
    width: 221,
    height: 56,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  cupertinoButtonWarningStack: {
    width: 221,
    height: 56
  }
});

export default FirstScene;
