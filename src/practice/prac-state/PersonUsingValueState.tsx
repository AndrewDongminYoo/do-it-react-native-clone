import React from 'react';
import { useCallback, useState } from 'react';
import type { FC } from 'react';
import { Alert, View, Text, Image } from 'react-native';
import { Colors } from 'react-native-paper';
import { styles } from './Person.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as D from '../../data';
import moment from 'moment';
import 'moment/locale/ko';
import { Avatar, IconText } from '../../components'

export type PersonProps = {
  person: D.IPerson
}

const Person: FC<PersonProps> = ({person: initialPerson}) => {

  const [comment, setComment] = useState<number>(initialPerson.counts.comment)
  const [retweet, setRetweet] = useState<number>(initialPerson.counts.retweet)
  const [heart, setHeart] = useState<number>(initialPerson.counts.heart)

  const avatarPressed = useCallback(() =>
    Alert.alert('avatar pressed'), [])
  const deletePressed = useCallback(() =>
    Alert.alert('delete pressed'), [])
  const countIconPressed = useCallback(
    (name: string) => () => {
      Alert.alert(`${name} pressed`)
      if (name === 'comment') {
        setComment(comment => comment+1)
      } else if (name === 'retweet') {
        setRetweet(retweet => retweet+1)
      } else {
        setHeart((heart) => heart + 1)
      }
    },[])


  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={initialPerson.avatar} size={50} onPress={avatarPressed}/>
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{initialPerson.name.replace(' ', '_')}</Text>
        <Text style={[styles.email]}>{initialPerson.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(initialPerson.createDate).startOf('day').fromNow()}
          </Text>
          <Icon size={20} name="trash-can-outline" color={Colors.lightBlue500} onPress={deletePressed}/>
        </View>
        <Text numberOfLines={3} style={[styles.text, styles.comments]}>{initialPerson.comments}</Text>
        <Image style={[styles.image]} source={{uri: initialPerson.image}}/>
        <View style={[styles.countsView]}>
            <IconText size={20} viewStyle={[styles.touchableIcon]} onPress={countIconPressed('comment')} textStyle={[styles.iconText]} name="comment"         text={comment}/>
            <IconText size={20} viewStyle={[styles.touchableIcon]} onPress={countIconPressed('retweet')} textStyle={[styles.iconText]} name="twitter-retweet" text={retweet}/>
            <IconText size={20} viewStyle={[styles.touchableIcon]} onPress={countIconPressed('heart')}   textStyle={[styles.iconText]} name="heart"           text={heart}/>
        </View>
      </View>
    </View>
  )
}

export default Person;