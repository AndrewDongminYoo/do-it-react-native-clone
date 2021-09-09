import React from 'react';
import useClock from '../hooks/useClock';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import useAssetFonts from '../hooks/useAssetFonts';

const Clock = () => {

  const time = useClock();
  const fonts = useAssetFonts()

  return (
    <SafeAreaView style={[styles.safeAreaView]}>
      <Text style={[styles.digitFont, styles.time]}>
        {time.toLocaleTimeString('en')}
      </Text>
      <Text style={[styles.digitFont]}>
        {time.toLocaleDateString('en')}
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  digitFont: {
    fontFamily: 'MajorMonoDisplay',
    fontWeight: '400'
  },
  time: {
    fontSize: 50,
    letterSpacing: -3
  }
})

export default Clock;