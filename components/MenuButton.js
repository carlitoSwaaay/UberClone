import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK", //link to profile screen
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK", //link to profile screen

  },
]

const MenuButton = () => {
  return (
    <View>
      <Text>MenuButton</Text>
    </View>
  )
}

export default MenuButton

const styles = StyleSheet.create({})