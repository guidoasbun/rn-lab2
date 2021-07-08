import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuItem from "./components/MenuItem";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Snap Eating Account</Text>
      
      <MenuItem name={'Paella'} price={'3.50'} imageSource={require("./assets/paella.jpeg")} />
     
      <MenuItem name={'Albondigas'} price={'3.50'} imageSource={require('./assets/albondigas.jpeg')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
