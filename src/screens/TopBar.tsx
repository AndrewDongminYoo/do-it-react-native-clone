import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Colors } from 'react-native-paper';
import * as D from '../data';

const name = D.randomName();
const avatarUrl = D.randomAvatarUrl(name);

const TopBar = () => {
  return (
    <View style={[styles.view]}>
      <Image style={[styles.avatar]} source={{uri: avatarUrl}}/>
      <View style={[styles.centerView]}>
        <Text style={[styles.text]}>{name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 5,
    backgroundColor: Colors.amber900,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  centerView: {
    flex: 1
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  }
})

export default TopBar;