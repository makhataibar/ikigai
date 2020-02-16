import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-native-paper";

import { Tasks } from "./_containers/Tasks/Tasks";

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Tasks/>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
