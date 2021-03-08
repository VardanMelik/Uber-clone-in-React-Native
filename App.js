import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      {/*<HomeScreen/>*/}
      <DestinationSearch/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    /*flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',*/
  },
});
