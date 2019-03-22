import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from "react-native";

import bgImage from "../img/background.jpg";
import logo from "../img/logo.png";
import Icon from "react-native-vector-icons/Ionicons";

const { width: WIDTH } = Dimensions.get("window");

export default class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      showPassword: true,
      press: false
    };
  }

  showPassword = () => {
    if (this.state.press === false) {
      this.setState({ showPassword: false, press: true });
    } else {
      this.setState({ showPassword: true, press: false });
    }
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.logoText}>Example</Text>
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
              placeholder={"type your email"}
              returnKeyType="next"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
              underlineColorAndroid="transparent"
            />
          </View>
          <View>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.text}>Forgot Password</Text>
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
  buttonLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#432577",
    justifyContent: "center",
    marginTop: 20
  },
  buttonRegister: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "#197770",
    justifyContent: "center",
    marginTop: 5
  },
  text: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16,
    textAlign: "center"
  }
});
