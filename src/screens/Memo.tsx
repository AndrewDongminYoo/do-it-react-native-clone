import React from 'react';
import { useMemo } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Colors } from 'react-native-paper';
import color from 'color';
import Person from './Person';
import * as D from '../data'

const title = 'Memo';

const Memo = () => {

  const people = useMemo(()=> {
    return D.makeArray(2).map(D.createRandomPerson)
  }, [])

  const people1 = D.makeArray(2).map(D.createRandomPerson)

  console.log(people)
  console.log(people1)

  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>
        {title}
      </Text>
      <FlatList data={people}
        style={[styles.flatList]}
        renderItem={({item}) => <Person person={item}/>}
        keyExtractor={(person) => person.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
      />
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
  },
  flatList:{
    width: "100%"
  },
  itemSeparator: {
    borderWidth: 1,
    borderEndColor: color(Colors.grey500).lighten(0.3).toString()
  }
})

export default Memo;