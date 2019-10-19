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
    <View
    style={styles.container}>
    <View>
    <Text>Email
    </Text>
      <TextInput
        style={{height: 20, borderBottomColor: 'black', borderBottomWidth: 1, width: 300, backgroundColor: 'white'}}
        onChangeText={(text) => this.setState({input: text})}
      />
    
      <Text>Password
            </Text>
        <TextInput
          style={{height: 20, borderBottomColor: 'black', borderBottomWidth: 1, backgroundColor: 'white'}}
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
