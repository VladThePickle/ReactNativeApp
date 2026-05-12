import { StyleSheet, Text,  Image } from 'react-native'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedCard from '../components/ThemedCard'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

import React from 'react'
import Logo from '../assets/img/heart-removebg-preview.png'

const Home = () => {
  return (
    

    <ThemedView style={styles.containers}>

      <Image source={Logo} style={styles.image}/>
      <Spacer/>

      <ThemedText style={styles.title} title = {true}>Home</ThemedText>

      <Spacer height={10}/>
      <ThemedText >Books</ThemedText>
      <Spacer height={10}/>

      <ThemedCard style={styles.card}>
        <ThemedText>Hello, this is a card</ThemedText>        
      </ThemedCard>    

      <Link href="/login" style={styles.link}>
        <ThemedText>Login</ThemedText>
      </Link>

      <Link href="/register" style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link>

      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
    
  )
}

export default Home

const styles = StyleSheet.create({
  containers: {
   flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18
  },

 image:{
    width: 200,
    height: 200,
    resizeMode:'contain'
 },

  link:{
    marginVertical: 10,
    borderBottomWidth: 1
  },

  card:{
    borderColor: '#000',
    boxShadow: '8px 4px rgba(0, 0, 0, 0.1)'
  }
})