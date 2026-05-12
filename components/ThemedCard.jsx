import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useColorScheme } from 'react-native'
import {Colors} from '../constants/Colors'


const ThemedCard = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme]
  return (
    
    <View style={[
        {backgroundColor: theme.uiBackground}, styles.card, style
    ]} {...props} />
      
   
  )
}


export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})