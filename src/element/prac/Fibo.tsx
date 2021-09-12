import React from 'react';
import { useMemo } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Colors } from 'react-native-paper';
import * as D from '../../data'
import { fibonacci } from './fibonacci'

const title = 'Fibo';

const Fibo = () => {

  const memoFibo = useMemo(()=>fibonacci,[])
  const fibo = useMemo(
    ()=>
      D.makeArray(20+1).map((x, idx) => ({
        number: idx,
        fibonacci: memoFibo(idx)
      })),
    [])

  return (
    <View style={[styles.view]}>
      <Text style={[styles.text]}>
        {title}
      </Text>
      <FlatList
        data={fibo}
        contentContainerStyle={[styles.contentContainerStyle]}
        renderItem={({item}) => (
          <Text style={[styles.text]}>
            {item.number} : {item.fibonacci}
          </Text>
        )}
        keyExtractor={(item)=>item.number.toString()}
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
  contentContainerStyle: {
    alignItems: 'center'
  }
})

export default Fibo;