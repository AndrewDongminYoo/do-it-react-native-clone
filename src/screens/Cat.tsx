import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, SafeAreaView, Platform, Dimensions } from 'react-native';
import { Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from 'color';
import useAssetFonts from '../hooks/useAssetFonts';


export default function Cat() {

  const { height, width } = Dimensions.get('window');
  const _onClick = () => console.log("Hello")
  const fonts = useAssetFonts();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.container} source={require('../../assets/cat.jpg')}>
        <StatusBar style="auto" />
        <Text style={[styles.text, styles.roboto]}>os: {Platform.OS}</Text>
        <Text style={[styles.text]}>height: {height}</Text>
        <Text style={[styles.text]}>width: {width}</Text>
        <Icon name="cat" size={40} color={Colors.white} onPress={_onClick}/>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10,
  },
  text: {
    marginBottom: 10,
    fontSize: 20,
    color: color(Colors.blue500).lighten(0.9).toString()
  },
  box: {
    height: 100,
    backgroundColor: Colors.lime500,
    marginBottom: 10
  },
  border: {
    borderWidth: 10,
    borderColor: color('black').alpha(0.3).toString(),
  },
  roboto: {
    fontFamily: 'Roboto-Black',
    fontSize: 30,
    fontWeight: Platform.select({
      ios: '700',
      android: '600',
      web: '700'
    })
  }
});
