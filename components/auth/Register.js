import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";

import bgImage from "../img/background.jpg";
import Icon from "react-native-vector-icons/Ionicons";

const { width: WIDTH } = Dimensions.get("window");

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      showPassword: true,
      pressPass: false
    };
  }

  showPassword = () => {
    if (this.state.pressPass === false) {
      this.setState({ showPassword: false, pressPass: true });
    } else {
      this.setState({ showPassword: true, pressPass: false });
    }
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.inputContainer}>
            <Icon
              name={"ios-create"}
              size={28}
              color={"rgba(255, 255, 255, 0.7)"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={"Full Name"}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon
              name={"md-at"}
              size={28}
              color={"rgba(255, 255, 255, 0.7)"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={"Email"}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
              underlineColorAndroid="transparent"
            />
            <Icon
              style={styles.validationIcon}
              name="ios-checkmark-circle-outline"
              size={26}
              color={"rgba(255, 255, 255, 0.7)"}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon
              name={"ios-person"}
              size={28}
              color={"rgba(255, 255, 255, 0.7)"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={"Username"}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
              underlineColorAndroid="transparent"
            />
            <Icon
              style={styles.validationIcon}
              name="ios-checkmark-circle-outline"
              size={26}
              color={"rgba(255, 255, 255, 0.7)"}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon
              name={"ios-lock"}
              size={28}
              color={"rgba(255, 255, 255, 0.7)"}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={"Password"}
              returnKeyType="go"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={this.state.showPassword}
              placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              style={styles.buttonEye}
              onPress={this.showPassword.bind(this)}
            >
              <Icon
                name={
                  this.state.pressPass === false ? "ios-eye" : "ios-eye-off"
                }
                size={26}
                color={"rgba(255, 255, 255, 0.7)"}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.textOr}>Or</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.facebook}>
              <Icon
                name={"logo-facebook"}
                size={28}
                color={"rgba(255, 255, 255, 0.7)"}
                style={styles.inputIcon}
              />
              <Text style={styles.text}>Login with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.gmail}>
              <Icon
                name={"logo-google"}
                size={28}
                color={"rgba(255, 255, 255, 0.7)"}
                style={styles.inputIcon}
              />
              <Text style={styles.text}>Login with Google</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    alignItems: "center"
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50
  },
  logo: {
    width: 120,
    height: 120
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    color: "rgba(255, 255, 255, 0.7)",
    marginHorizontal: 25
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 40
  },
  buttonEye: {
    position: "absolute",
    top: 8,
    right: 40
  },
  buttonRegister: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#197770",
    justifyContent: "center",
    marginTop: 10
  },
  text: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    textAlign: "center"
  },
  validationIcon: {
    position: "absolute",
    top: 8,
    right: 40
  },
  textOr: {
    paddingTop: 5,
    color: "white"
  },
  facebook: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#3B5998",
    justifyContent: "center",
    marginTop: 10
  },
  gmail: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#dd4b39",
    justifyContent: "center",
    marginTop: 5
  }
});
