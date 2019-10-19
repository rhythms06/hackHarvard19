import React, { useEffect, useState, Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { SCREENS } from "../constants";

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
