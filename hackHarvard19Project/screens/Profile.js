import React, { useEffect, useState, Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import firebase from "firebase";
// import firebase from "react-native-firebase";
import { SCREENS } from "../constants";

// var app = firebase.initializeApp({
//   apiKey: "AIzaSyCW7Uf0qvFdDNfjgOhcfjnIwltW11z5v3s",
//   authDomain: "hackharvard19project.firebaseapp.com",
//   databaseURL: "https://hackharvard19project.firebaseio.com",
//   projectId: "hackharvard19project",
//   storageBucket: "hackharvard19project.appspot.com",
//   messagingSenderId: "637275919090",
//   appId: "1:637275919090:web:13a86e85b703e0cf0b766b"
// });

function Profile({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "yellow"
      }}
    >
      <Text style={styles.textBig}>This is one single profile</Text>
      <Button
        title="Go back to Users"
        onPress={() => navigation.navigate(SCREENS.USERS)}
      />
    </View>
  );
}

Profile.navigationOptions = {
  title: "Profile"
};

export default Profile;

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
