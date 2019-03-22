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
import { createStackNavigator, createAppContainer } from "react-navigation";

import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

import bgImage from "../img/background.jpg";
import logo from "../img/logo.png";
import Icon from "react-native-vector-icons/Ionicons";

const { width: WIDTH } = Dimensions.get("window");

class LoginPage extends React.Component {
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
                name={this.state.press === false ? "ios-eye" : "ios-eye-off"}
                size={26}
                color={"rgba(255, 255, 255, 0.7)"}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.buttonLogin}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonRegister}
              onPress={() => this.props.navigation.navigate("Register")}
            >
              <Text style={styles.text}>Register</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={styles.textForgot}
              onPress={() => this.props.navigation.navigate("ForgotPassword")}
            >
              Forgot Password ?
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

class RegisterPage extends React.Component {
  render() {
    return <Register />;
  }
}

class ForgotPasswordPage extends React.Component {
  render() {
    return <ForgotPassword />;
  }
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: LoginPage
  },
  Register: {
    screen: RegisterPage
  },
  ForgotPassword: {
    screen: ForgotPasswordPage
  }
});

export default createAppContainer(AppNavigator);

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
  },
  textForgot: {
    paddingTop: 10,
    color: "white"
  }
});
