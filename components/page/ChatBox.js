import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  KeyboardAvoidingView
} from "react-native";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          date: "9:50 am",
          type: "in",
          message: "Konnichiwa"
        },
        {
          id: 2,
          date: "9:50 am",
          type: "out",
          message: "Oh, Konnichiwa minami-chwan"
        },
        {
          id: 3,
          date: "9:50 am",
          type: "in",
          message: "Omae wa yasashi,"
        },
        {
          id: 4,
          date: "9:50 am",
          type: "in",
          message: "Ore no sukiatte kudasai"
        },
        {
          id: 5,
          date: "9:50 am",
          type: "out",
          message: "Ha ? Korewa yume jyanai no ka ?"
        },
        {
          id: 6,
          date: "9:50 am",
          type: "out",
          message: "Sorenara kore wa isekai ka na ?"
        },
        {
          id: 7,
          date: "9:50 am",
          type: "in",
          message: "Hontou desu"
        },
        {
          id: 8,
          date: "9:50 am",
          type: "in",
          message: "Daisuki"
        },
        {
          id: 9,
          date: "9:50 am",
          type: "in",
          message: "Omae wa ore no hikari desu"
        }
      ]
    };
  }

  renderDate = date => {
    return <Text style={styles.time}>{date}</Text>;
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.data}
          keyExtractor={item => {
            return item.id.toString();
          }}
          renderItem={message => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === "in";
            let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
            return (
              <View style={[styles.item, itemStyle]}>
                {!inMessage && this.renderDate(item.date)}
                <View style={[styles.balloon]}>
                  <Text>{item.message}</Text>
                </View>
                {inMessage && this.renderDate(item.date)}
              </View>
            );
          }}
        />
        <KeyboardAvoidingView behavior="padding" style={styles.contain}>
          <View style={styles.footer}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid="transparent"
                onChangeText={name_address => this.setState({ name_address })}
              />
            </View>
            <TouchableOpacity style={styles.btnSend}>
              <Image
                source={{
                  uri: "https://png.icons8.com/small/75/ffffff/filled-sent.png"
                }}
                style={styles.iconSend}
              />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contain: {
    alignItems: "center"
  },
  list: {
    paddingHorizontal: 17
  },
  footer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
    padding: 5
  },
  btnSend: {
    backgroundColor: "#00BFFF",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center"
  },
  iconSend: {
    width: 20,
    height: 20,
    alignSelf: "center"
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 10
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    borderRadius: 20
  },
  itemIn: {
    alignSelf: "flex-start"
  },
  itemOut: {
    alignSelf: "flex-end"
  },
  time: {
    alignSelf: "flex-end",
    margin: 15,
    fontSize: 12,
    color: "#808080"
  },
  item: {
    marginVertical: 14,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eeeeee",
    borderRadius: 300,
    padding: 5
  }
});
