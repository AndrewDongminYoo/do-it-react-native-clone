import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Colors } from 'react-native-paper';
import * as D from '../../../data'
import useAsync from '../../../hooks/useAsync';
import Country from './Country'

const title = 'Fetch';

const Fetch = () => {

  const [countries, setCountries] = useState<D.ICountry[]>([])
  const [error, resetError] = useAsync(async ()=>{
    setCountries([])
    resetError()
    const countries = await D.getCountries()
    setCountries(countries)
  })

  return (
    <View style={[styles.view]}>
      <Text style={[styles.title]}>
        {title}
      </Text>
      {error && <Text>{error.message}</Text>}
      <FlatList
        data={countries}
        renderItem={({item}) => <Country country={item}/>}
        keyExtractor={(item, index)=>index.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    backgroundColor: Colors.blue100
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'Roboto-Bold'
  },
  separator: {
    borderBottomColor: Colors.blue50,
    borderBottomWidth: 1
  }
})

export default Fetch;