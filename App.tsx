import React from 'react';
import { useState, useCallback } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme, DarkTheme } from 'react-native-paper';
import { ToggleThemeProvider } from './src/context/ToggleThemeContext';

import useAssetFonts from './src/hooks/useAssetFonts'
import MainNavigator from './src/screens/MainNavigator'

export default function App() {

  const scheme = useColorScheme()
  const [theme, setTheme] = useState(scheme==='dark' ? DarkTheme : DefaultTheme )
  useAssetFonts()
  const toggleTheme = useCallback(()=>setTheme((theme)=>theme.dark ? DefaultTheme : DarkTheme),[])

  return (
    <AppearanceProvider>
      <PaperProvider theme={theme}>
        <ToggleThemeProvider toggleTheme={toggleTheme}>
          <SafeAreaView style={[styles.safeAreaView]}>
            <MainNavigator/>
          </SafeAreaView>
        </ToggleThemeProvider>
      </PaperProvider>
    </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex:1
  }
});
