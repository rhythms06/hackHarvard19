import { StyleSheet, Text, View, Image, Button } from "react-native";
import firebase from "firebase";
// import firebase from "react-native-firebase";
import { SCREENS } from "../constants";

var app = firebase.initializeApp({
  apiKey: "AIzaSyCW7Uf0qvFdDNfjgOhcfjnIwltW11z5v3s",
  authDomain: "hackharvard19project.firebaseapp.com",
  databaseURL: "https://hackharvard19project.firebaseio.com",
  projectId: "hackharvard19project",
  storageBucket: "hackharvard19project.appspot.com",
  messagingSenderId: "637275919090",
  appId: "1:637275919090:web:13a86e85b703e0cf0b766b"
});

var userName = "";
var emailAddress = "";
var password = "";

function Signup(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign Up.</Text>
      <Button
        onPress={() => navigation.navigate(SCREENS.START)}
        title="Go Back"
        color="#841584"
      />
    </View>
  );
}

Signup.navigationOptions = {
  title: "Sign Up"
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// TODO: read these values from a form where the user entered them

firebase.auth().createUserWithEmailAndPassword(emailAddress, password).catch(function(error) {
  // Handle errors with user creation here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("user creation error " + errorCode + ": " + errorMessage);
})
