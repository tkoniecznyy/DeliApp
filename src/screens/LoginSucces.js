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
import Icon from "react-native-vector-icons/EvilIcons";

function LoginSucces(props) {
  return (
    <View style={styles.root}>
      <StatusBar
        hidden
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
      />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect2}
          imageStyle={styles.rect2_imageStyle}
          source={require("../assets/images/Gradient_vD6MFEv.png")}
        >
          <View style={styles.iconColumn}>
            <Icon name="check" style={styles.icon}></Icon>
            <Text style={styles.loggSuccesfully}>
              You&#39;re logged succesfully!
            </Text>
            <Image
              source={require("../assets/images/succes_img.jpg")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
          <View style={styles.iconColumnFiller}></View>
          <View style={styles.buttonColumn}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("FirstScene")}
              style={styles.button}
            >
              <Text style={styles.text2}>Continue</Text>
            </TouchableOpacity>
            <Text style={styles.text4}>Terms &amp; Conditions</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  background: {
    flex: 1
  },
  rect2: {
    flex: 1
  },
  rect2_imageStyle: {},
  icon: {
    color: "rgba(1,197,15,1)",
    fontSize: 101,
    height: 88,
    width: 101,
    marginLeft: 94
  },
  loggSuccesfully: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    textAlign: "center",
    marginTop: 29,
    marginLeft: 6
  },
  image: {
    width: 320,
    height: 200,
    marginTop: 56
  },
  iconColumn: {
    width: 320,
    marginTop: 43,
    marginLeft: 27
  },
  iconColumnFiller: {
    flex: 1
  },
  button: {
    height: 55,
    backgroundColor: "rgba(247,247,247,0)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 22
  },
  text2: {
    width: 66,
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  text4: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "center"
  },
  buttonColumn: {
    marginBottom: 31,
    marginLeft: 41,
    marginRight: 41
  }
});

export default LoginSucces;
