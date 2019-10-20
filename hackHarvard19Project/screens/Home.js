import firebase from "firebase";
import { SCREENS } from "../constants";
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert, Button } from "react-native";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {text: "", name: ""};
  };

 render() {
   return (
     <View style={styles.container}>
      <View style={styles.match}>
        <Button
          title="Olivia (Piano)"
          onPress={(text) =>
            {
              this.name = "Olivia (Piano)";
              console.log(this.name);
            }
          }
        />
        <Button
          title="Barb (Tenor)"
          onPress={(text) =>
            {
              this.name = "Barb (Tenor)";
              console.log(this.name);
            }
          }
        />
        <Button
          title="Jorge (Glockenspiel)"
          onPress={(text) =>
            {
              this.name = "Jorge (Glockenspiel)";
              console.log(this.name);
            }
          }
        />
      </View>
      <View style={styles.match}>
        <Button
          title="Herman (Flute)"
          onPress={(text) =>
            {
              this.name = "Herman (Flute)";
              console.log(this.name);
            }
          }
        />
        <Button
          title="Ferguson (Guitar)"
          onPress={(text) =>
            {
              this.name = "Ferguson (Guitar)";
              console.log(this.name);
            }
          }
        />
        <Button
          title="Franz (Sax)"
          onPress={(text) =>
            {
              this.name = "Franz (Sax)";
              console.log(this.name);
            }
          }
        />
      </View>
      <View style={styles.match}>
        <Button
          title="Go Back to Start"
          onPress={() => this.props.navigation.navigate(SCREENS.START)}
        />
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
