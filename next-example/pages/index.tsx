import React from 'react'
import { View, DripsyProvider, createThemedComponent, Text, H1 } from 'dripsy'
import * as Native from 'react-native'

const theme = {
  colors: {
    primary: '#41b87a',
    secondary: 'black',
    background: 'white',
  },
  text: {
    primary: {
      fontSize: 40,
    },
    secondary: {
      fontSize: 32,
    },
  },
}

// you can create custom components too!
const ThemedText = createThemedComponent(Native.Text, {
  themeKey: 'text', // this lets them access the `text` variants from the theme
})

export default function App() {
  return (
    <DripsyProvider options={{ ssr: true }} theme={theme}>
      <View
        sx={{
          height: 400,
          backgroundColor: ['green', 'purple', null, 'black', 'red'],
        }}
      />
      <H1>Title</H1>

      <Text sx={{ fontSize: [100, 200] }}>Hi</Text>
      <ThemedText>Nice</ThemedText>
      <View sx={{ height: 400, backgroundColor: 'orange' }}>
        <View sx={{ height: 100, backgroundColor: ['primary', 'secondary'] }} />
      </View>
      <View sx={{ height: 400, backgroundColor: ['primary', 'secondary'] }} />
    </DripsyProvider>
  )
}
