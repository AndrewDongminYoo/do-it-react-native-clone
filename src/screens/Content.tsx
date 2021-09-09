import color from 'color';
import React from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { Colors } from 'react-native-paper';
import Person from '../copy/Person';
import * as D from '../data'


const people: D.IPerson[] = D.makeArray(10).map(D.createRandomPerson)

const Content = () => {
  return (
    <ScrollView contentContainerStyle={[styles.flex]}>
      <FlatList data={people}
        renderItem={({item}) => <Person person={item}/>}
        keyExtractor={(person) => person.id}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  itemSeparator: {
    borderWidth: 1,
    borderEndColor: color(Colors.grey500).lighten(0.3).toString()
  }
})

export default Content;