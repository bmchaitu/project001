import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import AppScreen from './components/AppScreen';
import AppNavigation from './navigation/AppNavigation';
import OTPScreen from './screens/OTPSCreen';

const App = () => {
  return (
    <AppNavigation />
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 35
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: "cover"
  }
});

export default App;