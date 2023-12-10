import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyle } from '../styles/styles'

export default function HomeScreen() {
  return (
    <View style={defaultStyle}>
      {/* Header */}
      <View>
        <Text style={{fontSize: 25}}>Our</Text>
        <Text style={{fontSize: 25, fontWeight: 700}}>Products</Text>
      </View>
    </View>
  )
}