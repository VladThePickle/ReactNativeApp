import { useUser } from "../hooks/useUser"
import { StyleSheet, Text, View } from "react-native"
import { Link } from "expo-router"
import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"
import ThemedButton from "../../components/ThemedButton"


const Books = () => {
        const { logout, user} = useUser()

    

    return (
        <ThemedView style  = {styles.container}>
           <ThemedText title={true} style={styles.heading}>
                {user.email}
            </ThemedText>
            <Spacer />



            <ThemedButton onPress={logout}>
                <Text style={{color:'#f2f2f2'}}>Logout</Text>
            </ThemedButton>
        

            <ThemedText>
                Time to start reading some labersons...
            </ThemedText>
            <Spacer />

             <Link href='/'>
                  <ThemedText style = {{textAlign: 'center'}}>
                     Back to Home
                 </ThemedText>
             </Link>
        </ThemedView>
        
    
    )
}

export default Books

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
    },
})