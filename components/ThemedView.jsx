import { useColorScheme, View } from 'react-native'
import React from 'react'
import {Colors} from '../constants/Colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const ThemedView = ({ style, safe = false, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme]
  
    if (!safe) return(
     <View style={[
        {backgroundColor: theme.background}, style
      ]} {...props} />
    )

    const insets = useSafeAreaInsets()

    return(
      <View style={[
        {backgroundColor: theme.background,
          paddingBottom: insets.bottom,
          paddingTop: insets.top
        }, style
      ]} {...props} />
    )
    
}

export default ThemedView