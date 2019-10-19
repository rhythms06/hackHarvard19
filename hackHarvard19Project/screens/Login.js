import React, { useEffect, useState, Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { SCREENS } from "../constants";

function Login({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "black"
      }}
    >
      <Text style={styles.textBig}>This is the sign in page</Text>
      <Button
        title="Sign in to view musicians"
        onPress={() => navigation.navigate(SCREENS.USERS)}
      />
      <Button
        title="Go Back to Start"
        onPress={() => navigation.navigate(SCREENS.START)}
      />
    </View>
  );
}

Login.navigationOptions = {
  title: "Login"
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  textBig: {
    fontSize: 36,
    textAlign: "center",
    margin: 10
  }
});
