import React, { useEffect, useState, Component } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { SCREENS } from "../constants";
import firebase from "firebase";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {text: "", user: "", pass: ""};
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 300, height: 75 }}>
        <Text style={{fontSize: 21}}>Email</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => this.user = text}
        />
        </View>

        <View style={{ width: 300, height: 75 }}>
        <Text style={{fontSize: 21}}>Password</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => this.pass = text}
        />
        </View>

        <Button
          title="Create Account"
          onPress={() =>
            {
              console.log("email: " +  this.user);
              console.log("pass: " + this.pass);
              createUser(this.user + "", this.pass + "", this.props.navigation);
            }
          }
        />
        <Button
          title="Go Back to Start"
          onPress={() => this.props.navigation.navigate(SCREENS.START)}
        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: "center",
    alignItems: "center"
  },
  textBig: {
    fontSize: 36,
    textAlign: "center",
    margin: 10
  },
  input: {
    fontSize: 21,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: 'white'
  },
});

// TODO: read these values from a form where the user entered them

skip = 1;

function createUser(emailAddress, password, navigation) {
  if(skip == 0)
  {
    firebase.auth().createUserWithEmailAndPassword(emailAddress, password).catch(function(error) {
      // Handle errors with user creation here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error " + errorCode + ": " + errorMessage);
      navigation.navigate(SCREENS.SIGNUP);
    })
  }
    // Navigate to the MoreAboutUser page.
    navigation.navigate(SCREENS.MOREABOUTUSER);
}
