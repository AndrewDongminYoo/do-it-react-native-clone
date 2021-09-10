import React from 'react';
import { useLayoutEffect, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native-paper';

const title = 'Interval';

const Interval = () => {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>
        {title}
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
    color: Colors.white
  }
})

export default Interval;