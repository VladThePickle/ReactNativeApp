import { StyleSheet, Pressable, Text, TextInput, View, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Keyboard } from 'react-native'
import { useUser } from '../hooks/useUser'

// themed components
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'



const login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, login} = useUser()
  const [error, setError] = useState(null)

  const HandleSubmit = async () => {
    setError(null)
    
    try{
        
        await login(email, password)
        
    }catch (error){
        setError(error.message)
    }
}
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style = {styles.container}>
        <Spacer />
        <ThemedText title ={true} style = {styles.title}>
            Login to Your Account
        </ThemedText>

        <ThemedTextInput placeholder='email'
            keyboardType="email-address"
            style={{width: '80%', marginBottom:20}}
            onChangeText={setEmail}
            value={email}
        />

        <ThemedTextInput placeholder='password'
            style={{width: '80%', marginBottom:20}}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
        />

        

        <ThemedButton onPress={HandleSubmit}>
            <Text style={{color: '#f2f2f2'}}>Login</Text> 
        </ThemedButton>


        {error && <Text style={styles.error}>{error}</Text>}

        <Spacer height={100} />
        <Link href='/register'>
         <ThemedText style = {{textAlign: 'center'}}>
            Register instead
         </ThemedText>
        </Link>

        <Spacer height={10}/>
        <Link href='/'>
            <ThemedText style = {{textAlign: 'center'}}>
                Back to Home
            </ThemedText>
        </Link>
    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },

    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },

    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },

    pressed: {
        opacity: 0.8
    },

     error:{
        color: Colors.warning,
        padding: 10,
        backgroundColor: '#f5c1c8',
        borderColor: Colors.warning,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
    },

})