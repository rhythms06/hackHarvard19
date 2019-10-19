import React, { useEffect, useState, Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { SCREENS } from "../constants";

function Users({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "yellow"
      }}
    >
      <Text style={styles.textBig}>here are all the users</Text>
      <Button
        title="Go Back to Start"
        onPress={() => navigation.navigate(SCREENS.START)}
      />
      <Button
        title="Go to your profile"
        onPress={() => navigation.navigate(SCREENS.PROFILE)}
      />
    </View>
  );
}

Users.navigationOptions = {
  title: "Users"
};

export default Users;

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
