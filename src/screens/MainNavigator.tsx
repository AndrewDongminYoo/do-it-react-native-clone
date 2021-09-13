import React from 'react';
import { useState } from 'react'
import { BottomNavigation } from 'react-native-paper';
import { Home, KeyboardAvoid, KeyboardAware, AutoFocus, Input } from './'

const MainNavigator = () => {

  const [index, setIndex] = useState<number>(0)
  const [routes] = useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'input', title: 'Input', icon: 'apple-keyboard-caps'},
    {key: 'avoid', title: 'KeyboardAvoid', icon: 'keyboard-variant'},
    {key: 'aware', title: 'KeyboardAware', icon: 'keyboard-settings'},
    {key: 'auto', title: 'AutoFocus', icon: 'home-automation'}
  ])
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    input: Input,
    avoid: KeyboardAvoid,
    aware: KeyboardAware,
    auto: AutoFocus
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