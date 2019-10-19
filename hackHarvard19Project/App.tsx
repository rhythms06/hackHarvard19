import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native';
import * as firebase from 'firebase';
var app = firebase.initializeApp({
  apiKey: "AIzaSyCW7Uf0qvFdDNfjgOhcfjnIwltW11z5v3s",
  authDomain: "hackharvard19project.firebaseapp.com",
  databaseURL: "https://hackharvard19project.firebaseio.com",
  projectId: "hackharvard19project",
  storageBucket: "hackharvard19project.appspot.com",
  messagingSenderId: "637275919090",
  appId: "1:637275919090:web:13a86e85b703e0cf0b766b"
});


export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./logo.png')}
      />
      <Text style={styles.titleText}>BandIt!</Text>
      <Button
        // onPress={onPressLearnMore}
        title="Sign In"
        color="#841584"
        // hello
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
