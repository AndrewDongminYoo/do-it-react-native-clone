import React from 'react';
import { useInterval, useToggle } from '../../../hooks';
import { useState, useCallback } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Colors } from 'react-native-paper';
import Avatar from '../../../components/Avatar'
import * as D from '../../../data'

const title = 'Interval';

type IdAndAvatar = Pick<D.IPerson, 'id' | 'avatar'>

const Interval = () => {

  const [avatars, setAvatars] = useState<IdAndAvatar[]>([])
  const [start, toggleStart] = useToggle(true)
  const clearAvatar = useCallback(()=> setAvatars((avatars)=>[]),[])

  useInterval(()=> start &&
    setAvatars((avatars) => [
      ...avatars,
      {id: D.randomId(), avatar: D.randomAvatarUrl()}
  ]), 1000, [start])

  return (
    <View style={[styles.view]}>
      <View style={[styles.topBar]}>
        <Text onPress={toggleStart} style={[styles.text]}>
          { start ? 'stop' : 'start'}
        </Text>
        <Text onPress={clearAvatar} style={[styles.text]}>
          Clear Avatars
        </Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <ScrollView contentContainerStyle={styles.contentContainerStyle}>
        {avatars.map(({id, avatar})=> (
          <Avatar key={id} uri={avatar} size={50} imageStyle={styles.avatar}/>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: Colors.blue900
  },
  text: {
    fontSize: 20,
    color: Colors.white
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Roboto-Black'
  },
  topBar: {
    padding: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.blue900
  },
  avatar: {
    borderColor: Colors.blue500,
    borderWidth: 2,
    padding: 5
  },
  contentContainerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default Interval;