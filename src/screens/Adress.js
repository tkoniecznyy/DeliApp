import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderX from "../components/HeaderX";
import { Link } from "react-router-dom";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import CupertinoButtonBlueTextColor1 from "../components/CupertinoButtonBlueTextColor1";
import SimpleLineIconsIcon from "react-native-vector-icons/dist/SimpleLineIcons";

function Adress(props) {
  return (
      <Root>
        <HeaderXStack>
          <HeaderX
              style={{
                top: 0,
                left: 0,
                height: 80,
                position: "absolute",
                right: 0,
                boxShadow: "1px 7px 5px  0.1px rgba(0,0,0,1) "
              }}
          ></HeaderX>
          <Link to="/FirstScene">
            <Button>
              <ButtonOverlay></ButtonOverlay>
            </Button>
          </Link>
        </HeaderXStack>
        <Body>
          <Background>
            <Rect7>
              <FeedbackBox>
                <AdressDetailsColumn>
                  <AdressDetails>ADRESS DETAILS</AdressDetails>
                  <Text42>
                    Please provide the address to which we will deliver the order
                  </Text42>
                  <Form>
                    <Name>
                      <EntypoIcon
                          name={props.iconName || "home"}
                          style={{
                            color: "rgba(255,255,255,1)",
                            fontSize: 30,
                            marginLeft: 20,
                            alignSelf: "center"
                          }}
                      ></EntypoIcon>
                      <TextInput2 placeholder="Apartment number"></TextInput2>
                    </Name>
                    <NameFiller></NameFiller>
                    <Email>
                      <FontAwesomeIcon
                          name={props.iconName || "street-view"}
                          style={{
                            color: "rgba(255,255,255,1)",
                            fontSize: 18,
                            marginLeft: 23,
                            alignSelf: "center"
                          }}
                      ></FontAwesomeIcon>
                      <TextInput3 placeholder="Street name"></TextInput3>
                    </Email>
                  </Form>
                  <Group>
                    <Rect9>
                      <MaterialCommunityIconsIcon
                          name={props.iconName || "city"}
                          style={{
                            color: "rgba(255,255,255,1)",
                            fontSize: 30,
                            marginLeft: 20,
                            alignSelf: "center"
                          }}
                      ></MaterialCommunityIconsIcon>
                      <TextInput5 placeholder="City"></TextInput5>
                    </Rect9>
                    <Rect9Filler></Rect9Filler>
                    <Rect10>
                      <FontAwesomeIcon
                          name={props.iconName || "mobile-phone"}
                          style={{
                            color: "rgba(255,255,255,1)",
                            fontSize: 18,
                            marginLeft: 23,
                            alignSelf: "center"
                          }}
                      ></FontAwesomeIcon>
                      <TextInput6 placeholder="Phone number"></TextInput6>
                    </Rect10>
                  </Group>
                  <CupertinoButtonBlueTextColor1
                      style={{
                        height: 44,
                        width: 205,
                        marginTop: 123,
                        marginLeft: 76
                      }}
                  ></CupertinoButtonBlueTextColor1>
                </AdressDetailsColumn>
                <AdressDetailsColumnFiller></AdressDetailsColumnFiller>
                <Rect8>
                  <TextInput4Stack>
                    <TextInput4
                        placeholder="Extra info for delivery"
                        maxLength={220}
                    ></TextInput4>
                    <SimpleLineIconsIcon
                        name="exclamation"
                        style={{
                          top: 21,
                          left: 251,
                          position: "absolute",
                          color: "rgba(255,251,251,1)",
                          fontSize: 40,
                          height: 45,
                          width: 40
                        }}
                    ></SimpleLineIconsIcon>
                  </TextInput4Stack>
                </Rect8>
              </FeedbackBox>
            </Rect7>
          </Background>
        </Body>
      </Root>
  );
}

const Root = styled.div`
  display: flex;
  background-color: rgb(255,255,255);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Button = styled.div`
  top: 10px;
  left: 85px;
  width: 189px;
  height: 70px;
  position: absolute;
  background-color: #E6E6E6;
  opacity: 0;
  border: none;
`;

const HeaderXStack = styled.div`
  height: 80px;
  position: relative;
`;

const Body = styled.div`
  height: 558px;
  width: 360px;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  margin-bottom: 1px;
  margin-top: 2px;
  align-self: center;
`;

const Background = styled.div`
  height: 558px;
  flex-direction: column;
  display: flex;
`;

const Rect7 = styled.div`
  background-image: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(31,178,204,1) 100%);
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
`;

const FeedbackBox = styled.div`
  height: 558px;
  flex-direction: column;
  display: flex;
`;

const AdressDetails = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-left: 88px;
`;

const Text42 = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  font-size: 12px;
  margin-top: 13px;
  align-self: center;
`;

const Form = styled.div`
  height: 112px;
  flex-direction: column;
  display: flex;
  margin-top: 45px;
  margin-left: 31px;
  margin-right: 31px;
`;

const Name = styled.div`
  height: 50px;
  background-color: rgba(255,255,255,0.3);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
`;

const TextInput2 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  font-size: 14px;
  flex: 1 1 0%;
  margin-right: 20px;
  margin-left: 10px;
  margin-top: 10px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const NameFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Email = styled.div`
  height: 50px;
  background-color: rgba(251,247,247,0.3);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
`;

const TextInput3 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  font-size: 14px;
  flex: 1 1 0%;
  margin-right: 20px;
  margin-left: 22px;
  margin-top: 10px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Group = styled.div`
  height: 112px;
  flex-direction: column;
  display: flex;
  margin-top: 13px;
  margin-left: 31px;
  margin-right: 31px;
`;

const Rect9 = styled.div`
  height: 50px;
  background-color: rgba(255,255,255,0.3);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
`;

const TextInput5 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  font-size: 14px;
  flex: 1 1 0%;
  margin-right: 20px;
  margin-left: 10px;
  margin-top: 10px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Rect9Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect10 = styled.div`
  height: 50px;
  background-color: rgba(251,247,247,0.3);
  border-radius: 5px;
  flex-direction: row;
  display: flex;
`;

const TextInput6 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  font-size: 14px;
  flex: 1 1 0%;
  margin-right: 20px;
  margin-left: 29px;
  margin-top: 10px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const AdressDetailsColumn = styled.div`
  flex-direction: column;
  margin-top: 39px;
  margin-left: 9px;
  margin-right: 9px;
  display: flex;
`;

const AdressDetailsColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect8 = styled.div`
  border-color: rgba(255,255,255,1);
  border-width: 0px;
  border-bottom-width: 1px;
  height: 85px;
  flex-direction: column;
  display: flex;
  margin-bottom: 86px;
  margin-left: 40px;
  margin-right: 28px;
  border-style: solid;
`;

const TextInput4 = styled.input`
  font-family: Arial;
  top: 0px;
  left: 0px;
  color: rgba(255,255,255,1);
  position: absolute;
  right: 0px;
  bottom: 0px;
  font-size: 12px;
  border: none;
  background: transparent;
`;

const TextInput4Stack = styled.div`
  flex: 1 1 0%;
  margin-bottom: 3px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Adress;
