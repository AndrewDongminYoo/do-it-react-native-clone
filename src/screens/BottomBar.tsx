import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const iconSize = 30, iconColor = 'white'
const icons = ['home-circle', 'image-search', 'tag-faces', 'account-cog']

const BottomBar = () => {
  return (
    <View style={[styles.view]}>
      {icons.map((name) => {
        return <Icon key={name} name={name} size={iconSize} color={iconColor} />
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    padding: 10,
    backgroundColor: Colors.lightBlue900,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
})

export default BottomBar;