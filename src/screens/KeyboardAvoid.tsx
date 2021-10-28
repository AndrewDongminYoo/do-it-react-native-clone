import React from 'react';
import { useRef, useCallback, useState, useMemo } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useToggleTheme } from '../context';
import * as D from '../data'

const KeyboardAvoid = () => {

  const [person, setPerson] = useState<D.IPerson>(D.createRandomPerson())
  const { dark, colors } = useTheme()
  const toggleTheme = useToggleTheme()
  const textInputRef = useRef<TextInput | null>(null)
  const setFocus = useCallback(()=>
    textInputRef.current?.focus(), [textInputRef.current]
  )

  const textInputStyle = useMemo(()=> [
    styles.textInput,
    {color: colors.text, borderColor: colors.placeholder}
  ], [colors.text, colors.placeholder]
  )

  return (
    <View style={[styles.view, {backgroundColor: colors.surface}]}>
      <View style={[styles.topBar, {backgroundColor: colors.accent}]}>
        <Text style={[styles.textButton]} onPress={setFocus}>focus</Text>
        <Text style={[styles.textButton]} onPress={Keyboard.dismiss}>dismiss keyboard</Text>
        <View style={{flex: 1}} />
        <Switch value={dark} onValueChange={toggleTheme}/>
      </View>
      <View style={{flex: 1}} />
      <KeyboardAvoidingView style={[styles.view]}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <View style={[styles.view]}>
          <View style={[styles.textView]}>
            <Text style={[styles.text, {color: colors.text}]}>email</Text>
              <TextInput
                returnKeyType='next'
                ref={textInputRef}
                style={[
                  styles.textInput,
                  {color: colors.text, borderColor: colors.placeholder
                  }]}
                value={person.email}
                placeholder="enter your email"
                onChangeText={(email) => setPerson((person)=>({...person, email}))} />
            <View style={[styles.textView]}>
              <Text style={[styles.text, {color: colors.text}]}>name</Text>
              <TextInput
                ref={textInputRef}
                style={textInputStyle}
                value={person.name}
                placeholder="enter your name"
                onChangeText={(name) => setPerson((person)=>({...person, name}))}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
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
  text: {
    fontSize: 24,
  },
  textButton: {marginLeft: 10, fontSize: 20},
  textView: {padding: 5},
  textInput: {fontSize: 24, borderWidth: 1, borderRadius: 5},
  keyboardAvoidingView: {flex: 1, padding: 10}
})

export default KeyboardAvoid;