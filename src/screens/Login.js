import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function Login(props) {
  return (
    <View style={styles.root}>
      <StatusBar
        hidden
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
      />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect}
          imageStyle={styles.rect_imageStyle}
          source={require("../assets/images/Gradient_li9Vm2x.png")}
        >
          <View style={styles.imageColumn}>
            <Image
              source={require("../assets/images/deli_app_logo1.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <View style={styles.username}>
              <EvilIconsIcon name="user" style={styles.icon22}></EvilIconsIcon>
              <TextInput
                placeholder="Username"
                placeholderTextColor="rgba(255,255,255,1)"
                secureTextEntry={false}
                style={styles.usernameInput}
              ></TextInput>
            </View>
            <View style={styles.password}>
              <EvilIconsIcon name="lock" style={styles.icon2}></EvilIconsIcon>
              <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,1)"
                secureTextEntry={false}
                style={styles.passwordInput}
              ></TextInput>
            </View>
          </View>
          <View style={styles.imageColumnFiller}></View>
          <View style={styles.buttonColumn}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
              style={styles.button}
            >
              <Text style={styles.text2}>Get Started</Text>
            </TouchableOpacity>
            <View style={styles.button2Row}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("SignUp")}
                style={styles.button2}
              >
                <View style={styles.createAccountFiller}></View>
                <Text style={styles.createAccount}>Create Account</Text>
              </TouchableOpacity>
              <View style={styles.button2Filler}></View>
              <Text style={styles.needHelp}>Need Help?</Text>
            </View>
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
  rect: {
    flex: 1
  },
  rect_imageStyle: {},
  image: {
    width: 200,
    height: 200,
    marginLeft: 39
  },
  username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 30
  },
  icon22: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  usernameInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 15
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  passwordInput: {
    height: 30,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  imageColumn: {
    marginTop: 53,
    marginLeft: 41,
    marginRight: 41
  },
  imageColumnFiller: {
    flex: 1
  },
  button: {
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center",
    marginBottom: 95,
    marginRight: 5
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: "flex-end"
  },
  createAccountFiller: {
    flex: 1
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)"
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  needHelp: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "flex-end"
  },
  button2Row: {
    height: 17,
    flexDirection: "row"
  },
  buttonColumn: {
    marginBottom: 36,
    marginLeft: 41,
    marginRight: 36
  }
});

export default Login;
