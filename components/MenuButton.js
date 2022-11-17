import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements/dist/icons/Icon'

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
      <TouchableOpacity
        style={tw`bg-gray-100 absolute top-9 left-8 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name="menu" />
      </TouchableOpacity>
    </View>
  )
}

export default MenuButton

const styles = StyleSheet.create({})