import firebase from "firebase";
import { SCREENS } from "../constants";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert, YellowBox } from "react-native";
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";


export default class MorePref extends Component {
  constructor(props) {
    super(props);
    YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
  ]);
 }

 render() {
   return (
     <View style={styles.container}>
      <View style={{ width: 300, height: 75 }}>
        <Text style={{fontSize: 21}}>First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({input: text})}
        />
      </View>

      <View style={{ width: 300, height: 75 }}>
       <Text style={{fontSize: 21}}>Last Name</Text>
       <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({input: text})}
       />
      </View>

      <View style={{ width: 300, height: 75 }}>
        <Text style={{fontSize: 21}}>Gender</Text>
        <MenuProvider style={{ flexDirection: "column", flex: 1, padding: 30 }}>
          <Menu onSelect={value => alert(`You Clicked : ${value}`)}>
          <MenuTrigger>
            <Text style={styles.headerText}>DropDown Menu</Text>
          </MenuTrigger>
          <MenuOptions>
           <MenuOption value={"Male"}>
             <Text style={styles.menuContent}>Acoustic</Text>
           </MenuOption>
           <MenuOption value={"Female"}>
             <Text style={styles.menuContent}>ElectricGuitar</Text>
           </MenuOption>
          </MenuOptions>
        </MenuProvider>
      </View>

      <View style={{ width: 300, height: 75 }}>
      <Text>What instrument are you jamming with?</Text>
         <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
           <Menu onSelect={value => alert(`You Clicked : ${value}`)}>

             <MenuTrigger  >
             <Text style={styles.headerText}>DropDown Menu</Text>
             </MenuTrigger  >

             <MenuOptions>
               <MenuOption value={"Acoustic Guitar"}>
                 <Text style={styles.menuContent}>Acoustic</Text>
               </MenuOption>
               <MenuOption value={"Electric Guitar"}>
                 <Text style={styles.menuContent}>ElectricGuitar</Text>
               </MenuOption>
               <MenuOption value={"Singer"}>
                 <Text style={styles.menuContent}>Singer</Text>
               </MenuOption>
               <MenuOption value={"Drums"}>
                 <Text style={styles.menuContent}>Drums</Text>
               </MenuOption>
               <MenuOption value={"Keyboard"}>
                 <Text style={styles.menuContent}>Keyboard</Text>
               </MenuOption>
               <MenuOption value={"Bass"}>
                 <Text style={styles.menuContent}>Bass</Text>
               </MenuOption>
               <MenuOption value={3} disabled={true}>
                 <Text style={styles.menuContent}>Disabled Menu</Text>
               </MenuOption>
             </MenuOptions>
          </Menu>
        </MenuProvider>
      </View>

      <View style={{ width: 300, height: 75 }}>
      <Text>Who are you looking to jam with?</Text>
      <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
        <Menu onSelect={value => alert(`You Clicked : ${value}`)}>

          <MenuTrigger  >
          <Text style={styles.headerText}>DropDown Menu</Text>
          </MenuTrigger  >

          <MenuOptions>
            <MenuOption value={"Acoustic Guitarist"}>
              <Text style={styles.menuContent}>Acoustic</Text>
            </MenuOption>
            <MenuOption value={"Electric Guitarist"}>
              <Text style={styles.menuContent}>ElectricGuitar</Text>
            </MenuOption>
            <MenuOption value={"Singer"}>
              <Text style={styles.menuContent}>Singer</Text>
            </MenuOption>
            <MenuOption value={"Drummer"}>
              <Text style={styles.menuContent}>Drums</Text>
            </MenuOption>
            <MenuOption value={"Keyboard"}>
              <Text style={styles.menuContent}>Keyboard</Text>
            </MenuOption>
            <MenuOption value={"Bassist"}>
              <Text style={styles.menuContent}>Bass</Text>
            </MenuOption>
            <MenuOption value={"Anyone!"}>
              <Text style={styles.menuContent}>Bass</Text>
            </MenuOption>
            <MenuOption value={3} disabled={true}>
              <Text style={styles.menuContent}>Disabled Menu</Text>
            </MenuOption>
          </MenuOptions>

        </Menu>
      </MenuProvider>
      </View>

      <Button
       title="Create Account"
       onPress={() => createUser(emailAddress, password, this.props.navigation)}
      />
      <Button
       title="Go Back to Start"
       onPress={() => this.props.navigation.navigate(SCREENS.START)}
      />
     </View>

     );
   }
 }
   const styles = StyleSheet.create({
    headerText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold"
  },
  menuContent: {
    color: "#000",
    fontWeight: "bold",
    padding: 2,
    fontSize: 20
  }
});
      <Button
        title="Rock On"
        onPress={() => navigation.navigate(SCREENS.HOME)}
      />

    </View>
    <Button
      title="Go Back to Start"
      onPress={() => navigation.navigate(SCREENS.START)}
    />
  </View>
  )
  };
};
