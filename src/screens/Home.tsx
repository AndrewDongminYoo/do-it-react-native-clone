import React from 'react';
import { useState, useCallback, useRef } from 'react';
import { StyleSheet, View, Text, Switch, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import Person from './Person';
import { useToggleTheme } from '../context';
import * as D from '../data'

const darkColor = {
  accent: "#03dac6",
  backdrop: "rgba(0, 0, 0, 0.5)",
  background: "#121212",
  disabled: "rgba(255, 255, 255, 0.38)",
  error: "#CF6679",
  notification: "#ff80ab",
  onSurface: "#FFFFFF",
  placeholder: "rgba(255, 255, 255, 0.54)",
  primary: "#BB86FC",
  surface: "#121212",
  text: "#ffffff"
}

const defaultColor = {
  "accent": "#03dac4",
  "background": "#f6f6f6",
  "backdrop": "rgba(0, 0, 0, 0.5)",
  "disabled": "rgba(0, 0, 0, 0.26)",
  "error": "#B00020",
  "notification": "#f50057",
  "onSurface": "#000000",
  "placeholder": "rgba(0, 0, 0, 0.54)",
  "primary": "#6200ee",
  "surface": "#ffffff",
  "text": "#000000",
}

const Home = () => {

  const [people, setPeople] = useState<D.IPerson[]>([D.createRandomPerson()])
  const { colors, dark } = useTheme()
  const toggleTheme = useToggleTheme()
  const create = useCallback(()=>{
    setPeople((people) => [...people, D.createRandomPerson()])
  }, [])
  const remove = useCallback(()=>{
    setPeople((people) => [])
  }, [])
  const flatListRef = useRef<FlatList | null>(null)
  const onContentSizeChange = useCallback(
    ()=> flatListRef.current?.scrollToEnd(),
    [flatListRef.current]
  )

  return (
    <View style={[styles.view, {backgroundColor: colors.surface}]}>
      <View style={[styles.topBar, {backgroundColor: colors.accent}]}>
        <Text style={styles.text} onPress={create}>
          create
        </Text>
        <Text style={styles.text} onPress={remove}>
          remove
        </Text>
        <View style={{flex:1}}/>
        <Switch value={dark} onChange={toggleTheme}/>
      </View>
      <FlatList
        ref={flatListRef}
        data={people}
        renderItem={({item})=><Person person={item} />}
        keyExtractor={(person) => person.id}
        onContentSizeChange={onContentSizeChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  topBar: {
    height: 80,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginRight: 10,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold'
  }
})

export default Home;

