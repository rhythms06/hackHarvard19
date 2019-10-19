import { StyleSheet, Text, View, Image, Button } from "react-native";
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

var userName = "";
var emailAddress = "";
var password = "";

function Signin(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign In.</Text>
      <Button
        onPress={() => navigation.navigate(SCREENS.START)}
        title="Go Back"
        color="#841584"
      />
    </View>
  );
};

export default Signin;

Signin.navigationOptions = {
  title: "Sign In"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

// try signing in the user
