import React from 'react';
import { FC } from 'react';
import { useLayoutEffect, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native-paper';
import * as D from '../../../data'

export type CountryProps = {
  country: D.ICountry
}

const Country: FC<CountryProps> = ({ country }) => {

  let {name, capital, region, population, subregion} = country;

  return (
    <View style={[styles.view]}>
      <View>
        <Text style={[styles.text]}>
          {name}
        </Text>
      </View>
      <View>
        <Text>capital: {capital}</Text>
        <Text>region: {region}</Text>
        <Text>subregion: {subregion}</Text>
        <Text>population: {population}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 5
  },
  text: {
    fontSize: 30,
    fontWeight: '400',
    color: Colors.white
  }
})

export default Country;