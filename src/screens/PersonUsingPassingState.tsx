import React from 'react';
import { useCallback, useState } from 'react';
import type { FC } from 'react';
import { Alert, View, Text, Image } from 'react-native';
import { Colors } from 'react-native-paper';
import { styles } from './Person.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as D from '../data';
import moment from 'moment';
import 'moment/locale/ko';
import { Avatar, IconText } from '../components'
import PersonIcons from './PersonIcons';

export type PersonProps = {
  person: D.IPerson
}

const Person: FC<PersonProps> = ({person: initialPerson}) => {

  const [person, setPerson] = useState<D.IPerson>(initialPerson)

  const avatarPressed = useCallback(
    () => Alert.alert('avatar pressed'),[])
  const deletePressed = useCallback(
    () => Alert.alert('delete pressed'),[])

  return (
    <View style={[styles.view]}>
      <View style={[styles.leftView]}>
        <Avatar imageStyle={[styles.avatar]} uri={person.avatar} size={50} onPress={avatarPressed}/>
      </View>
      <View style={[styles.rightView]}>
        <Text style={[styles.name]}>{person.name.replace(' ', '_')}</Text>
        <Text style={[styles.email]}>{person.email}</Text>
        <View style={[styles.dateView]}>
          <Text style={[styles.text]}>
            {moment(person.createDate).startOf('day').fromNow()}
          </Text>
          <Icon size={20} name="trash-can-outline" color={Colors.lightBlue500} onPress={deletePressed}/>
        </View>
        <Text numberOfLines={3} style={[styles.text, styles.comments]}>{person.comments}</Text>
        <Image style={[styles.image]} source={{uri: person.image}}/>
        <PersonIcons person={person} setPerson={setPerson}/>
      </View>
    </View>
  )
}

export default Person;