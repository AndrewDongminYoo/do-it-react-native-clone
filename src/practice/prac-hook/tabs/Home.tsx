import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { Colors, useTheme } from 'react-native-paper';
import { useToggleTheme } from '../../../context';
import * as D from '../../../data'
import useAsync from '../../../hooks/useAsync';
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

const defaultColor = {
  "accent": "#03dac4",
  "background": "#f6f6f6",
  "backdrop": "rgba(0, 0, 0, 0.5)",
  "disabled": "rgba(0, 0, 0, 0.26)",
  "error": "#B00020",
  "notification": "#f50057",
  "onSurface": "#000000",
  "placeholder": "rgba(0, 0, 0, 0.54)",
  "primary": "#6200ee",
  "surface": "#ffffff",
  "text": "#000000",
}

const Home = () => {

  const theme = useTheme()
  const toggleTheme = useToggleTheme()
  const { dark, fonts, colors } = theme

  return (
    <View style={[styles.view, {backgroundColor: colors.background}]}>
      <View style={[styles.bar, {backgroundColor: colors.primary}]}>
        <Text style={[styles.text, {color:colors.text}, fonts.medium]}>
          Top Bar
        </Text>
      </View>
      <View style={[styles.content]}>
        <Text style={[styles.text, {color:colors.text}, fonts.regular]}>
          Hello Theme!!
        </Text>
        <Switch value={dark} onValueChange={toggleTheme}/>
        <Text style={[styles.text, {color:colors.text}, fonts.regular]}>
          🌗
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