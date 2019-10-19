import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { StartScreen, SignInScreen, SignUpScreen, ProfileScreen, UsersScreen } from "./screens";
import firebase from "firebase";
// import firebase from "react-native-firebase";
import { SCREENS } from "./constants";

// var app = firebase.initializeApp({
//   apiKey: "AIzaSyCW7Uf0qvFdDNfjgOhcfjnIwltW11z5v3s",
//   authDomain: "hackharvard19project.firebaseapp.com",
//   databaseURL: "https://hackharvard19project.firebaseio.com",
//   projectId: "hackharvard19project",
//   storageBucket: "hackharvard19project.appspot.com",
//   messagingSenderId: "637275919090",
//   appId: "1:637275919090:web:13a86e85b703e0cf0b766b"
// });

const Navigator = createSwitchNavigator(
  {
    Start: StartScreen,
    SignIn: SignInScreen,
    SignUp: SignUpScreen,
    Profile: ProfileScreen
  },
  { initialRouteName: SCREENS.START }
);

export default createAppContainer(Navigator);

// export const auth = firebase.auth(app);
