import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Switch,
  Image
} from "react-native";
import HeaderX from "../components/HeaderX";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialButtonPrimary4 from "../components/MaterialButtonPrimary4";

function Settings(props) {
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
          <View style={styles.settingsList}>
            <View style={styles.accountSettingsStack}>
              <View style={styles.accountSettings}>
                <Text style={styles.expanded}>Account Settings</Text>
                <View style={styles.subSettings}>
                  <View style={styles.button3Column}>
                    <TouchableOpacity style={styles.button3}>
                      <Text style={styles.text10}>Edit Profile</Text>
                      <View style={styles.text10Filler}></View>
                      <IoniconsIcon
                        name="ios-arrow-forward"
                        style={styles.icon}
                      ></IoniconsIcon>
                    </TouchableOpacity>
                    <View style={styles.changeConnections}>
                      <Text style={styles.reportABug}>Report a bug</Text>
                      <View style={styles.reportABugFiller}></View>
                      <IoniconsIcon
                        name="ios-arrow-forward"
                        style={styles.icon2}
                      ></IoniconsIcon>
                    </View>
                  </View>
                  <View style={styles.button3ColumnFiller}></View>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("ContactForm")}
                    style={styles.button}
                  >
                    <Text style={styles.text12}>
                      Contact with our Support Team
                    </Text>
                    <View style={styles.text12Filler}></View>
                    <IoniconsIcon
                      name="ios-arrow-forward"
                      style={styles.icon3}
                    ></IoniconsIcon>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.sub2}>
                <View style={styles.notifications}>
                  <Text style={styles.text7}>Notifications</Text>
                  <View style={styles.text7Filler}></View>
                  <Switch
                    value={true}
                    trackColor={{ true: "rgba(230, 230, 230,1)" }}
                    thumbColor="rgba(31,178,204,1)"
                    style={styles.switch3}
                  ></Switch>
                </View>
                <View style={styles.notificationsFiller}></View>
                <View style={styles.sponsored}>
                  <Text style={styles.text73}>Sponsored Messages</Text>
                  <View style={styles.text73Filler}></View>
                  <Switch
                    value={false}
                    trackColor={{
                      true: "rgba(230, 230, 230,1)",
                      false: "rgba(230, 230, 230,1)"
                    }}
                    style={styles.switch4}
                  ></Switch>
                </View>
              </View>
            </View>
            <View style={styles.materialButtonPrimary4Stack}>
              <MaterialButtonPrimary4
                style={styles.materialButtonPrimary4}
              ></MaterialButtonPrimary4>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("FirstScene")}
                style={styles.button2}
              ></TouchableOpacity>
            </View>
          </View>
          <Text style={styles.pageName}>SETTINGS</Text>
          <View style={styles.userInfo}>
            <View style={styles.avatarRow}>
              <Image
                source={require("../assets/images/anonim_avatar.jpg")}
                resizeMode="stretch"
                style={styles.avatar}
              ></Image>
              <View style={styles.nameSurnameColumn}>
                <Text style={styles.nameSurname}>Name {"\n"}Surname</Text>
                <Text style={styles.abcdExampleCom}>abcd@example.com</Text>
              </View>
            </View>
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
  settingsList: {
    left: 51,
    height: 347,
    position: "absolute",
    right: 450,
    bottom: 372
  },
  accountSettings: {
    top: 0,
    left: 0,
    height: 165,
    position: "absolute",
    right: 0
  },
  expanded: {
    color: "#121212",
    fontSize: 18,
    marginTop: -3
  },
  subSettings: {
    height: 118,
    width: 310,
    marginTop: 12,
    alignSelf: "center"
  },
  button3: {
    height: 30,
    flexDirection: "row"
  },
  text10: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6
  },
  text10Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(31,178,204,1)",
    fontSize: 30
  },
  changeConnections: {
    height: 30,
    flexDirection: "row",
    marginTop: 11
  },
  reportABug: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6
  },
  reportABugFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(31,178,204,1)",
    fontSize: 30
  },
  button3Column: {
    marginLeft: 10,
    marginRight: 10
  },
  button3ColumnFiller: {
    flex: 1
  },
  button: {
    height: 30,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10
  },
  text12: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 6
  },
  text12Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon3: {
    color: "#1fb2cc",
    fontSize: 30
  },
  sub2: {
    top: 158,
    height: 95,
    position: "absolute",
    width: 300,
    left: 5
  },
  notifications: {
    height: 14,
    alignSelf: "center",
    flexDirection: "row"
  },
  text7: {
    color: "#121212",
    fontSize: 18
  },
  text7Filler: {
    flex: 1,
    flexDirection: "row"
  },
  switch3: {
    width: 45
  },
  notificationsFiller: {
    flex: 1
  },
  sponsored: {
    height: 14,
    alignSelf: "center",
    flexDirection: "row",
    marginBottom: 41
  },
  text73: {
    color: "#121212",
    fontSize: 18
  },
  text73Filler: {
    flex: 1,
    flexDirection: "row"
  },
  switch4: {
    width: 45
  },
  accountSettingsStack: {
    height: 253,
    marginTop: 15,
    marginLeft: 24,
    marginRight: 24
  },
  materialButtonPrimary4: {
    height: 36,
    width: 180,
    position: "absolute",
    left: 0,
    top: 0
  },
  button2: {
    top: 0,
    left: 0,
    width: 180,
    height: 36,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    opacity: 0
  },
  materialButtonPrimary4Stack: {
    width: 180,
    height: 36,
    marginTop: 20,
    marginLeft: 70
  },
  pageName: {
    top: 0,
    left: 85,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 24
  },
  userInfo: {
    top: 49,
    left: 87,
    height: 125,
    position: "absolute",
    right: 451
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  nameSurname: {
    color: "#1fb2cc",
    fontSize: 30
  },
  abcdExampleCom: {
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    marginTop: 5
  },
  nameSurnameColumn: {
    width: 147,
    marginLeft: 62,
    marginTop: 13
  },
  avatarRow: {
    height: 106,
    flexDirection: "row",
    marginRight: 12
  },
  ellipseStack: {
    height: 899,
    marginTop: 34,
    marginLeft: -50,
    marginRight: -449
  }
});

export default Settings;
