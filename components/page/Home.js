import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import Setting from "./Setting";
import ChatBox from "./ChatBox";

class HomeScreen extends Component {
  render() {
    return <ChatBox />;
  }
}

class SettingsScreen extends Component {
  render() {
    return <Setting />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Setting: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === "Setting") {
          iconName = `ios-options`;
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default createAppContainer(TabNavigator);
