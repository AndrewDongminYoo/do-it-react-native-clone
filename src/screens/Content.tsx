import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import * as D from '../data'

const title = 'Context';

const avatars = D.makeArray(200).map((x) => D.randomAvatarUrl());

const Content = () => {
  return (
    <ScrollView contentContainerStyle={[styles.view]}>
      {avatars.map((avatarUrl, index) => (
        <View key={index.toString()} style={styles.avatarView}>
          <Image style={styles.avatar} source={{uri: avatarUrl}} />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 5,
    // flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'hidden'
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