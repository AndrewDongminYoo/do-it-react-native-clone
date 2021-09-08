import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, Dimensions } from 'react-native';
import { Colors } from 'react-native-paper';
import color from 'color';


export default function App() {

  console.log(Platform.OS)
  const { height, width } = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={[styles.text]}>os: {Platform.OS}</Text>
      <Text style={[styles.text]}>height: {height}</Text>
      <Text style={[styles.text]}>width: {width}</Text>
    <View style={[styles.box]}></View>
    <View style={[styles.box, styles.border, {borderRadius: 20,}]}></View>
    <View style={[styles.box, styles.border, {borderTopLeftRadius: 40, borderBottomLeftRadius: 40}]}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue500,
    padding: 10,
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
    // color: color(Colors.blue500).lighten(0.9).toString()
  },
  box: {
    height: 100,
    // backgroundColor: Colors.lime500,
    marginBottom: 10
  },
  border: {
    borderWidth: 10,
    // borderColor: color('black').alpha(0.3).toString(),
  }
});
