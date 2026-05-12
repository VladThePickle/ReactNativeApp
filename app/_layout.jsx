import {Slot, Stack} from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors} from '../constants/Colors'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'
import { BooksProvider } from '../contexts/BooksContext'

const RootLayout = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <UserProvider>
      <BooksProvider>
        <StatusBar style = "auto"/>
        <View style={{flex: 1}}>
          <Stack screenOptions={{
            headerStyle: {backgroundColor: theme.navBackground},
            headerTintColor: theme.title,
            headerShown: false
          }}>
            <Stack.Screen name = "(dashboard)" options ={{headerShown: false}} />
            <Stack.Screen name = "(auth)" options ={{headerShown: false}} />
            <Stack.Screen name = "about" options ={{title: 'About'}} />
          
        </Stack>
        </View>
      </BooksProvider>
    </UserProvider>
  )
} 

export default RootLayout

const styles = StyleSheet.create({})