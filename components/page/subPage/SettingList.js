import React, { Component } from "react";
import { View, Platform, StyleSheet, FlatList } from "react-native";
import ListItem from "./ListItem";

export default class SettingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          key: "1",
          nome: "Name",
          msg: "Yamasaru Aka"
        },
        {
          key: "2",
          nome: "Email",
          msg: "akasaru@gmail.com"
        }
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.list}
          renderItem={({ item }) => <ListItem data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == "android" ? 80 : 0
  }
});
