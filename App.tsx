import React, { Fragment } from 'react';
import { StyleSheet, Dimensions, SafeAreaView, ScrollView } from 'react-native';
import { TopBar, BottomBar, Content, Fab } from './src/screens';
import { Cat, Clock } from './src/screens';
import { Cache, Fibo, Memo } from './src/screens';
import { Colors } from 'react-native-paper';

const { width } = Dimensions.get('window')
const numberOfComponents = 3;

export default function App() {

  return (
    <>
      <SafeAreaView style={[styles.safeAreaView]}>
        <ScrollView horizontal
        contentContainerStyle={[styles.contentContainerStyle]}
      >
        <Cache/>
        <Memo/>
        <Fibo/>
      </ScrollView>
      {/* <Cat/>
      <Clock/> */}
      {/* <SafeAreaView style={styles.container}>
        <TopBar/>
        <Content/>
        <BottomBar/>
      </SafeAreaView>
      <Fab/> */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex:1
  },
  contentContainerStyle: {
    width: width*numberOfComponents
  }
});
