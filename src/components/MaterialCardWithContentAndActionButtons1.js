import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialCardWithContentAndActionButtons1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardItem1Style}>
        <View style={styles.headerStyle}>
          <Image
            source={require("../assets/images/pexels-vie-studio-6168066.jpg")}
            style={styles.leftImage}
          ></Image>
          <View style={styles.headerContent}>
            <Text style={styles.hello}>Hello!</Text>
            <Text style={styles.noteTextStyle}>
              We have a little gift for you!
            </Text>
          </View>
        </View>
      </View>
      <Image
        source={require("../assets/images/pexels-karolina-grabowska-5650048.jpg")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          You can use promo code &quot;DELIAPP20&quot; to get 20%{"\n"}discount
          for your order!
        </Text>
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
  cardItem1Style: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    height: 72
  },
  headerStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  leftImage: {
    height: 40,
    width: 40,
    backgroundColor: "#CCC",
    borderRadius: 20
  },
  headerContent: {
    paddingLeft: 16,
    justifyContent: "center"
  },
  hello: {
    fontSize: 16,
    color: "#000",
    lineHeight: 20
  },
  noteTextStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 210
  },
  body: {
    padding: 16
  },
  bodyText: {
    lineHeight: 20,
    fontSize: 14,
    color: "#424242"
  }
});

export default MaterialCardWithContentAndActionButtons1;
