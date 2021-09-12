import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Colors, useTheme } from 'react-native-paper';
import * as D from '../data'
import useAsync from '../hooks/useAsync';
import Country from './Country'

const darkColor = {
  accent: "#03dac6",
  backdrop: "rgba(0, 0, 0, 0.5)",
  background: "#121212",
  disabled: "rgba(255, 255, 255, 0.38)",
  error: "#CF6679",
  notification: "#ff80ab",
  onSurface: "#FFFFFF",
  placeholder: "rgba(255, 255, 255, 0.54)",
  primary: "#BB86FC",
  surface: "#121212",
  text: "#ffffff"
}

const Home = () => {

  const theme = useTheme()
  const { fonts, colors } = theme
  console.log(theme)

  return (
    <View style={[styles.view]}>
     <View style={[styles.bar, {backgroundColor: colors.primary}]}>
       <Text style={[styles.text, {color:colors.text}, fonts.medium]}>
        Top Bar
       </Text>
     </View>
     <View style={[styles.content]}>
       <Text style={[styles.text, {color:colors.text}, fonts.regular]}>
        Hello Theme!!
       </Text>
     </View>
     <View style={[styles.bar, {backgroundColor: colors.accent}]}>
       <Text style={[styles.text, {color:colors.text}, fonts.light]}>
        Bottom Bar
       </Text>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  bar: {
    height: 50,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold'
  }
})

export default Home;