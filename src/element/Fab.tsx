import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Fab = () => {

  const _onPress = () => console.log("feather clicked")

  return (
    <View style={[styles.absoluteView]}>
      <Icon name="feather" size={50} color="white" onPress={_onPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  absoluteView: {
    backgroundColor: Colors.blue900,
    position: 'absolute',
    right: 30,
    bottom: Platform.select({
      ios: 100,
      android: 80,
      web: 100
    }),
    padding: 10,
    borderRadius: 35
  }
})

export default Fab;