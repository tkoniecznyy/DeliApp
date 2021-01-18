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
import MaterialHelperTextBox from "../components/MaterialHelperTextBox";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialButtonWithShadow from "../components/MaterialButtonWithShadow";
import MaterialButtonSuccess from "../components/MaterialButtonSuccess";
import MaterialButtonDanger from "../components/MaterialButtonDanger";

function Summary(props) {
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
          <Text style={styles.text}>SUMMARY</Text>
          <MaterialHelperTextBox
            style={styles.materialHelperTextBox}
          ></MaterialHelperTextBox>
          <Text style={styles.toPay}>TO PAY:</Text>
          <Text style={styles.examplePrice}>123.45</Text>
          <FontAwesomeIcon name="cc-visa" style={styles.icon}></FontAwesomeIcon>
          <FontAwesomeIcon
            name="cc-mastercard"
            style={styles.icon2}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            name="cc-paypal"
            style={styles.icon3}
          ></FontAwesomeIcon>
          <Text style={styles.pln}>PLN</Text>
          <MaterialButtonWithShadow
            style={styles.materialButtonWithShadow}
          ></MaterialButtonWithShadow>
          <MaterialButtonSuccess
            style={styles.materialButtonSuccess}
          ></MaterialButtonSuccess>
          <MaterialButtonDanger
            style={styles.materialButtonDanger}
          ></MaterialButtonDanger>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("FirstScene")}
            style={styles.button}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Feedback")}
            style={styles.button2}
          ></TouchableOpacity>
          <TouchableOpacity style={styles.button3}></TouchableOpacity>
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
    top: 14,
    left: 0,
    width: 859,
    height: 890,
    position: "absolute"
  },
  text: {
    top: 0,
    left: 85,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24
  },
  materialHelperTextBox: {
    height: 96,
    width: 342,
    position: "absolute",
    left: 59,
    top: 246
  },
  toPay: {
    top: 104,
    left: 219,
    position: "absolute",
    fontFamily: "roboto-italic",
    color: "#121212",
    height: 36,
    width: 91,
    fontSize: 22
  },
  examplePrice: {
    top: 140,
    left: 256,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 35,
    width: 84,
    fontSize: 18
  },
  icon: {
    left: 179,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 51,
    top: 186
  },
  icon2: {
    top: 186,
    left: 247,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 51
  },
  icon3: {
    top: 186,
    left: 320,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 51
  },
  pln: {
    top: 140,
    left: 352,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    height: 35,
    width: 37
  },
  materialButtonWithShadow: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 63,
    top: 360
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
    width: 142,
    position: "absolute",
    left: 59,
    top: 442
  },
  button: {
    top: 442,
    left: 59,
    width: 142,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  button2: {
    top: 412,
    left: 256,
    width: 126,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  button3: {
    top: 360,
    left: 63,
    width: 100,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  ellipseStack: {
    width: 859,
    height: 904,
    marginTop: 34,
    marginLeft: -50
  }
});

export default Summary;
