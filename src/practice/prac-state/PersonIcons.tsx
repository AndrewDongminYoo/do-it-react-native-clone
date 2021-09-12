import React from 'react';
import { useCallback } from 'react'
import type { FC, Dispatch, SetStateAction } from 'react'
import { View, Alert } from 'react-native';
import { IconText } from '../../components';
import { styles } from './Person.style';
import * as D from '../../data'

export type PersonIconsProps = {
  person: D.IPerson
  setPerson: Dispatch<SetStateAction<D.IPerson>>
}

const PersonIcons: FC<PersonIconsProps> = ({person, setPerson}) => {

  const countIconPressed = useCallback(
    (name: string) => () => {
      Alert.alert(`${name} pressed`)
      if (name === 'comment') {
        setPerson(person => ({
          ...person,
          counts: {
            ...person.counts,
            comment: person.counts.comment+1
          }
        }))
      } else if (name === 'retweet') {
        setPerson(person => ({
          ...person,
          counts: {
            ...person.counts,
            retweet: person.counts.retweet+1
          }
        }))
      } else {
        setPerson(person => ({
          ...person,
          counts: {
            ...person.counts,
            heart: person.counts.heart + 1
          }
        }))
      }
    },[])

  return (
    <View style={[styles.countsView]}>
      <IconText size={20} viewStyle={[styles.touchableIcon]} onPress={countIconPressed('comment')} textStyle={[styles.iconText]} name="comment"         text={person.counts.comment}/>
      <IconText size={20} viewStyle={[styles.touchableIcon]} onPress={countIconPressed('retweet')} textStyle={[styles.iconText]} name="twitter-retweet" text={person.counts.retweet}/>
      <IconText size={20} viewStyle={[styles.touchableIcon]} onPress={countIconPressed('heart')}   textStyle={[styles.iconText]} name="heart"           text={person.counts.heart}/>
    </View>
  )
}

export default PersonIcons;