import { createSwitchNavigator, createAppContainer } from "react-navigation";
import {
  LoginScreen,
  UsersScreen,
  ProfileScreen,
  MoreAboutUserScreen,
  StartScreen,
  SignupScreen,
  HomeScreen
} from "./screens";
import { SCREENS } from "./constants";

const Navigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Users: UsersScreen,
    Profile: ProfileScreen,
    MoreAboutUser: MoreAboutUserScreen,
    Signup: SignupScreen,
    Start: StartScreen,
    Home: HomeScreen
  },
  { initialRouteName: SCREENS.START }
);

export default createAppContainer(Navigator);

// export const auth = firebase.auth(app);
