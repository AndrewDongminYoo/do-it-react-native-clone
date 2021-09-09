import React, { Fragment } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { TopBar, BottomBar, Content, Fab, Cat, Clock } from './src/screens';
import { Colors } from 'react-native-paper';


export default function App() {

  return (
    <>
      <Cat/>
      <Clock/>
      {/* <SafeAreaView style={styles.container}>
        <TopBar/>
        <Content/>
        <BottomBar/>
      </SafeAreaView>
      <Fab/> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBlue100
  }
});
