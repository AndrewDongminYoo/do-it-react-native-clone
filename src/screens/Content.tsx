import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import * as D from '../data'

const title = 'Context';

const avatars = D.makeArray(200).map((x) => D.randomAvatarUrl());

const Content = () => {
  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>
        {avatars.map((avatarUrl, index) => (
          <View key={index.toString()} style={styles.avatarView}>
            <Image style={styles.avatar} source={{uri: avatarUrl}} />
          </View>
        ))}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 5,
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    overflow: 'hidden'
  },
  text: {
    fontSize: 20,
    color: 'white'
  },
  avatarView: {
    padding: 3
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
})

export default Content;