import React, { useEffect, useState, Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { SCREENS } from "../constants";
import firebase from "firebase";

var emailAddress = "";
var password = "";

function Signup({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "yellow"
      }}
    >
      <Text style={styles.textBig}>This is signup page</Text>
      <Button
        title="CREATE ACCOUNT"
        onPress={() => createUser(emailAddress, password)}
      />
      <Button
        title="Go Back to Start"
        onPress={() => navigation.navigate(SCREENS.START)}
      />
    </View>
  );
}

Signup.navigationOptions = {
  title: "Signup"
};

export default Signup;

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

// TODO: read these values from a form where the user entered them


function createUser(emailAddress, password) {
    firebase.auth().createUserWithEmailAndPassword(emailAddress, password).catch(function(error) {
      // Handle errors with user creation here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error " + errorCode + ": " + errorMessage);
    })
    console.log("Account created");

    // Navigate to the MoreAboutUser page.
}
