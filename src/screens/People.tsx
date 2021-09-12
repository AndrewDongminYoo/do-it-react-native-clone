import React from 'react';
import { useCallback, useState } from 'react';
import { useTheme } from 'react-native-paper'
import { useToggleTheme } from '../context'
import { Alert, View, Text, Image, Switch, FlatList, StyleSheet } from 'react-native';
import * as D from '../data';
import Person from '../people/Person';

const People = () => {

  const [people, setPeople] = useState<D.IPerson[]>([D.createRandomPerson()])
  const { colors, dark } = useTheme()
  const toggleTheme = useToggleTheme()
  const create = useCallback(()=>{
    setPeople((people) => [...people, D.createRandomPerson()])
  }, [])
  const remove = useCallback(()=>{
    setPeople((people) => [])
  }, [])

  return (
    <View style={[styles.view, {backgroundColor: colors.surface}]}>
      <View style={[styles.topBar, {backgroundColor: colors.accent}]}>
        <Text style={styles.text} onPress={create}>
          create
        </Text>
        <Text style={styles.text} onPress={remove}>
          remove
        </Text>
        <View style={{flex:1}}/>
        <Switch value={dark} onChange={toggleTheme}/>
      </View>
      <FlatList
        data={people}
        renderItem={({item})=><Person person={item} />}
        keyExtractor={(person) => person.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex:1
  },
  topBar: {
    flexDirection: 'row',
    padding: 5
  },
  text: {
    marginRight: 10,
    fontSize: 20
  }
})

export default Person;