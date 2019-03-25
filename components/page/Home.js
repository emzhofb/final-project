import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import Setting from "./Setting";

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home!</Text>
      </View>
    );
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
          iconName = "ios-home";
        } else if (routeName === "Setting") {
          iconName = "ios-options";
        }
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
