import firebase from "firebase";
import { SCREENS } from "../constants";
import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

function MoreAboutUser({ navigation }) {
  return (
    <View
    style={styles.container}>

      <Button
        title="Let's jam!"
        // onPress={() => navigation.navigate(SCREENS.HOME)}
      />

      <Button
        title="Go Back"
        onPress={() => navigation.navigate(SCREENS.START)}
      />
    </View>
  )
};

MoreAboutUser.navigationOptions = {
  title: "MoreAboutUser"
};

export default MoreAboutUser;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});
