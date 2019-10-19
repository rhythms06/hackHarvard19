import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import firebase from "firebase";
// import firebase from "react-native-firebase";
import { SCREENS } from "../constants";

function Start(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 200, height: 200 }}
        source={require('./logo.png')}
      />
      <Text style={styles.titleText}>BandIt!</Text>
      <Button
        onPress={() => navigation.navigate(SCREENS.SIGNIN)}
        title="Sign In"
        color="#841584"
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate(SCREENS.SIGNUP)}
      />
    </View>
  );
}

Start.navigationOptions = {
  title: "Start"
};

export default Start;

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
