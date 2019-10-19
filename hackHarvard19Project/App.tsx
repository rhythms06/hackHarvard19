import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>BandIt!</Text>
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
});
         />
          <Button
            onPress={() => this.handleClick()}
            title="Glode!"
            style={{ width: 300 }}
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
