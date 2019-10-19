import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { LoginScreen, UsersScreen, ProfileScreen } from "./screens";
import { SCREENS } from "./constants";

const Navigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Users: UsersScreen,
    Profile: ProfileScreen
  },
  { initialRouteName: SCREENS.LOGIN }
);

export default createAppContainer(Navigator);
