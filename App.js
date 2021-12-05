import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './Components/AppBar/AppBar';
import Footer from './Components/Footer/Footer';
import SearchField from './Components/SearchField/SearchField';

export default function App() {
  return (
    <NativeBaseProvider>
      <AppBar />
      <SearchField />
      {/* <StatusBar style="auto" /> */}
      <Footer />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
