import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const About = () => {
  return (
    <View style={styles.containers}>
      <Text>About</Text>
      <Link href="/" style={styles.link}>Back to home</Link>
      
    </View>
  )
}

export default About

const styles = StyleSheet.create({

   containers: {
  backgroundColor: 'white',
   flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

    link:{
    marginVertical: 10,
    borderBottomWidth: 1,
  },

})