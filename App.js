import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Adress from "./src/screens/Adress";
import Basket from "./src/screens/Basket";
import Categories from "./src/screens/Categories";
import Explore from "./src/screens/Explore";
import Feedback from "./src/screens/Feedback";
import FirstScene from "./src/screens/FirstScene";
import Login from "./src/screens/Login";
import Map from "./src/screens/Map";
import PaymentDone from "./src/screens/PaymentDone";
import Settings from "./src/screens/Settings";
import SignUp from "./src/screens/SignUp";
import Summary from "./src/screens/Summary";
import FastFoodMenu from "./src/screens/FastFoodMenu";
import PizzaMenu from "./src/screens/PizzaMenu";
import ContactForm from "./src/screens/ContactForm";
import ContactFormAfterSended from "./src/screens/ContactFormAfterSended";
import BasketOrderCacelled from "./src/screens/BasketOrderCacelled";
import AccountCreated from "./src/screens/AccountCreated";
import LoginSucces from "./src/screens/LoginSucces";
import LoginError from "./src/screens/LoginError";

const DrawerNavigation = createDrawerNavigator({
  Adress: Adress,
  Basket: Basket,
  Categories: Categories,
  Explore: Explore,
  Feedback: Feedback,
  FirstScene: FirstScene,
  Login: Login,
  Map: Map,
  PaymentDone: PaymentDone,
  Settings: Settings,
  SignUp: SignUp,
  Summary: Summary,
  FastFoodMenu: FastFoodMenu,
  PizzaMenu: PizzaMenu,
  ContactForm: ContactForm,
  ContactFormAfterSended: ContactFormAfterSended,
  BasketOrderCacelled: BasketOrderCacelled,
  AccountCreated: AccountCreated,
  LoginSucces: LoginSucces,
  LoginError: LoginError
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Adress: Adress,
    Basket: Basket,
    Categories: Categories,
    Explore: Explore,
    Feedback: Feedback,
    FirstScene: FirstScene,
    Login: Login,
    Map: Map,
    PaymentDone: PaymentDone,
    Settings: Settings,
    SignUp: SignUp,
    Summary: Summary,
    FastFoodMenu: FastFoodMenu,
    PizzaMenu: PizzaMenu,
    ContactForm: ContactForm,
    ContactFormAfterSended: ContactFormAfterSended,
    BasketOrderCacelled: BasketOrderCacelled,
    AccountCreated: AccountCreated,
    LoginSucces: LoginSucces,
    LoginError: LoginError
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "roboto-700italic": require("./src/assets/fonts/roboto-700italic.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-500italic": require("./src/assets/fonts/roboto-500italic.ttf"),
      "roboto-italic": require("./src/assets/fonts/roboto-italic.ttf"),
      "impact-regular": require("./src/assets/fonts/impact-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
