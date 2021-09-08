import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { TopBar, BottomBar, Content } from './src/screens';
import { Colors } from 'react-native-paper';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <TopBar/>
      <Content/>
      <BottomBar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlue100,
    padding: 10,
  }
});
