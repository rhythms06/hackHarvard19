import { createSwitchNavigator, createAppContainer } from "react-navigation";
import {
  LoginScreen,
  UsersScreen,
  ProfileScreen,
  StartScreen,
  SignupScreen
} from "./screens";
import { SCREENS } from "./constants";

const Navigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Users: UsersScreen,
    Profile: ProfileScreen,
    Signup: SignupScreen,
    Start: StartScreen
  },
  { initialRouteName: SCREENS.START }
);

export default createAppContainer(Navigator);

// export const auth = firebase.auth(app);
