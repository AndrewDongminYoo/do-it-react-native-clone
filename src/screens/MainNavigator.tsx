import React from 'react';
import { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Colors , BottomNavigation } from 'react-native-paper';

const title = 'MainNavigator';

const MainNavigator = () => {

  const [index, setIndex] = useState<number>(0)
  const [routes] = useState([])
  const renderScene = BottomNavigation.SceneMap({})

  return(
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}


export default MainNavigator;