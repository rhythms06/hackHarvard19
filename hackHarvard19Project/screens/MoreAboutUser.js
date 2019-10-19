import firebase from "firebase";
import { SCREENS } from "../constants";
import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image, Button } from "react-native";


export default class MoreAboutUser extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
  return (
    <View style={styles.container}>

      <View style={{ width: 300, height: 75, backgroundColor: 'powderblue' }}>
      <Text>Email</Text>

      <TextInput
        style="input"
        onChangeText={(text) => this.setState({input: text})}
      />
      </View>

      <View style={{ width: 300, height: 75, backgroundColor: 'skyblue' }}>
      <Text>Password</Text>

      <TextInput
        style="input"
        onChangeText={(text) => this.setState({input: text})}
      />
      </View>

      <Button
        title="Let's jam!"
        onPress={() => navigation.navigate(SCREENS.HOME)}
      />

      <Button
        title="Go Back"
        onPress={() => navigation.navigate(SCREENS.START)}
      />

    </View>
  )
  };
};



const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    backgroundColor: 'white'
  },
  // Text + TextInput: {
  //   margin-top: 10px;
  // }
});
