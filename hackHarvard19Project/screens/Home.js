import firebase from "firebase";
import { SCREENS } from "../constants";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert, Button } from "react-native";


export default class Home extends Component {
  constructor(props) {
    super(props);
  };

 render() {
   return (
     <View style={styles.container}>
      <View style={styles.match}>
        <Text>Olivia (Piano)</Text>
        <Text>Jorge (Glockenspiel)</Text>
        <Text>Barb (Tenor)</Text>
      </View>
      <View style={styles.match}>
        <Text>Herman (Flute)</Text>
        <Text>Ferguson (Guitar)</Text>
        <Text>Franz (Sax)</Text>
      </View>
      <View style={styles.match}>
        <Text>Liz (Triangle)</Text>
        <Text>Lorraine (Tuba)</Text>
        <Text>Casey (Harmonica)</Text>
      </View>
     </View>
   );
 };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    position:'relative',
    top:100
  },
  match: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
});
