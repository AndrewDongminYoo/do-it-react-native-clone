import React, { useCallback } from 'react';
import type { FC, Dispatch, SetStateAction } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native-paper';
import * as D from '../data';

export type TopBarProps = {
  setPeople: Dispatch<SetStateAction<D.IPerson[]>>
}

const TopBar: FC<TopBarProps> = ({ setPeople }) => {

  const create = useCallback(()=>
    setPeople((prevPeople: D.IPerson[]) =>
      [D.createRandomPerson(), ...prevPeople])
  , [])
  const remove = useCallback(()=>
    setPeople((prevPeople: D.IPerson[]) => [])
  , [])

  return (
    <View style={[styles.topBar]}>
      <Text style={[styles.textButton]} onPress={create}>create</Text>
      <Text style={[styles.textButton]} onPress={remove}>remove</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  topBar: {
    padding: 5,
    backgroundColor: Colors.lightBlue700,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textButton: {
    fontSize: 20,
    color: Colors.white
  }
})

export default TopBar;