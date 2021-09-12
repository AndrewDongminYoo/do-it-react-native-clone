import React from 'react';
import { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Colors , BottomNavigation } from 'react-native-paper';
import { Fetch, Interval, LifeCycle, Timer } from '../tabs'

const title = 'MainNavigator';

const MainNavigator = () => {

  const [index, setIndex] = useState<number>(0)
  const [routes] = useState([
    {key: 'life', title: 'LifeCycle', icon: 'account-convert'},
    {key: 'fetch', title: 'Fetch', icon: 'server-network'},
    {key: 'interval', title: 'Interval', icon: 'history'},
    {key: 'timer', title: 'Timer', icon: 'progress-clock'}
  ])
  const renderScene = BottomNavigation.SceneMap({
    life: LifeCycle,
    timer: Timer,
    interval: Interval,
    fetch: Fetch
  })

  return(
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}


export default MainNavigator;