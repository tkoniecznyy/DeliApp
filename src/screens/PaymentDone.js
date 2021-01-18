import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";
import HeaderX from "../components/HeaderX";
import Svg, { Ellipse } from "react-native-svg";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";
import MaterialButtonDanger from "../components/MaterialButtonDanger";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function PaymentDone(props) {
  return (
    <View style={styles.root}>
      <StatusBar
        hidden
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
      />
      <HeaderX icon2Name="power" style={styles.headerX}></HeaderX>
      <View style={styles.body}>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 859.43 890.3" style={styles.ellipse}>
            <Ellipse
              strokeWidth={1}
              fill="rgba(255,255,255,1)"
              cx={430}
              cy={445}
              rx={429}
              ry={445}
            ></Ellipse>
          </Svg>
          <Text style={styles.succes}>SUCCES !</Text>
          <Text style={styles.toPay}>Thank you for being with us!</Text>
          <MaterialButtonSuccess
            style={styles.materialButtonSuccess}
          ></MaterialButtonSuccess>
          <MaterialButtonDanger
            style={styles.materialButtonDanger}
          ></MaterialButtonDanger>
          <Text style={styles.loremIpsum}>
            Your order has been delivered to the supplier. Get ready for pickup.
            {"\n"}
            {"\n"}You will be informed about the progress via SMS and the
            application{"\n"}
            {"\n"}If you like our application, please leave positive feedback
            and we will repay you with a discount code for your next order!
            {"\n"}
            {"\n"}Enjoy!
          </Text>
          <MaterialCommunityIconsIcon
            name="home"
            style={styles.icon}
          ></MaterialCommunityIconsIcon>
          <EntypoIcon name="forward" style={styles.icon2}></EntypoIcon>
          <FontAwesomeIcon
            name="check-square-o"
            style={styles.icon3}
          ></FontAwesomeIcon>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("FirstScene")}
            style={styles.button}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("FirstScene")}
            style={styles.button2}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Feedback")}
            style={styles.button3}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Feedback")}
            style={styles.button4}
          ></TouchableOpacity>
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
    backgroundColor: "#1fb2cc",
    width: 360,
    flex: 1
  },
  ellipse: {
    top: 9,
    left: 0,
    width: 859,
    height: 890,
    position: "absolute"
  },
  succes: {
    top: 0,
    left: 85,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24
  },
  toPay: {
    top: 104,
    left: 164,
    position: "absolute",
    fontFamily: "roboto-italic",
    color: "#121212",
    height: 36,
    width: 246,
    fontSize: 22
  },
  materialButtonSuccess: {
    height: 36,
    width: 126,
    position: "absolute",
    left: 255,
    top: 412
  },
  materialButtonDanger: {
    height: 36,
    width: 138,
    position: "absolute",
    left: 79,
    top: 412
  },
  loremIpsum: {
    top: 206,
    left: 94,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 90,
    width: 287
  },
  icon: {
    top: 463,
    left: 124,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  icon2: {
    top: 463,
    left: 299,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 46,
    width: 40
  },
  icon3: {
    top: 47,
    left: 107,
    position: "absolute",
    color: "rgba(79,250,9,1)",
    fontSize: 40,
    height: 40,
    width: 38
  },
  button: {
    top: 412,
    left: 79,
    width: 138,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  button2: {
    top: 471,
    left: 126,
    width: 38,
    height: 31,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  button3: {
    top: 412,
    left: 255,
    width: 126,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  button4: {
    top: 471,
    left: 299,
    width: 40,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  ellipseStack: {
    width: 859,
    height: 899,
    marginTop: 34,
    marginLeft: -50
  }
});

export default PaymentDone;
