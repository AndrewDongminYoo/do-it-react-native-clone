import React from 'react';
import type { FC } from 'react';
import { Fragment, useMemo, useState } from 'react';
import { StyleSheet, Dimensions, SafeAreaView, ScrollView, FlatList, View, Text } from 'react-native';
import { TopBar, BottomBar, Content, Fab } from './src/screens';
import { Cat, Clock } from './src/screens';
import { Cache, Fibo, Memo } from './src/prac';
import { Colors } from 'react-native-paper';
import color from 'color';
import { PersonUsingObjectState, PersonUsingValueState, PersonUsingPassingState } from './src/screens';
import * as D from './src/data'


const { width } = Dimensions.get('window')
type PersonInformation = {
  title: string
  Component: FC<any>
}
const personInformations: PersonInformation[] = [
  {title: 'PersonUsingObjectState', Component: PersonUsingObjectState },
  {title: 'PersonUsingValueState', Component: PersonUsingValueState },
  {title: 'PersonUsingPassingState', Component: PersonUsingPassingState }
]
const numberOfComponents = personInformations.length

export default function App() {

  const [people, setPeople] = useState<D.IPerson[]>([])

  const children = useMemo(()=>
    personInformations.map(({title, Component}: PersonInformation)=>(
      <View style={{flex:1}} key={title}>
        <Text style={[styles.text]}>
          {title}
        </Text>
        <FlatList data={people}
          style={[styles.flatList]}
          renderItem={({item}) => <Component person={item}/>}
          keyExtractor={(person, idx) => person.id}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
        />
      </View>
  )), [people.length])

  return (
    <>
      <SafeAreaView style={[styles.safeAreaView]}>
        <TopBar setPeople={setPeople}/>
        <ScrollView horizontal
          contentContainerStyle={[styles.contentContainerStyle]}
        >
        {   children   }
        {/* <Cache/> */}
        {/* <Memo/> */}
        {/* <Fibo/> */}
        </ScrollView>
      {/* <Cat/>
      <Clock/> */}
      {/* <SafeAreaView style={styles.container}>

        {/* <Content/> */}
        {/* <BottomBar/> */}
      {/* </SafeAreaView> */}
      {/* <Fab/> */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex:1
  },
  text: {
    fontSize: 20,
    color: Colors.white
  },
  flatList:{
    width: "100%"
  },
  contentContainerStyle: {
    width: width*numberOfComponents,
    backgroundColor: Colors.grey500
  },
  itemSeparator: {
    borderWidth: 1,
    borderEndColor: color(Colors.grey500).lighten(0.3).toString()
  }
});
