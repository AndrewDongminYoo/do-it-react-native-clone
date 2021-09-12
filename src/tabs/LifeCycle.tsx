import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native-paper';
import { useLayout } from '../hooks'

const title = 'LifeCycle';

const LifeCycle = () => {

  const [layout, setLayout] = useLayout()
  const { width, height } = layout

  return (
    <View onLayout={setLayout} style={[styles.view]}>
      <Text style={[styles.text]}>
        {title}
      </Text>
      <Text style={[styles.text]}>
        width: {width}
      </Text>
      <Text style={[styles.text]}>
        height: {height}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 5,
    backgroundColor: Colors.blue900
  },
  text: {
    fontSize: 20,
    color: Colors.white,
    fontFamily: 'Roboto-Regular'
  }
})

export default LifeCycle;