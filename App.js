import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from './screens/fb'
import Instagram from './screens/in'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer style={styles.container}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontStyle: 'monospace',
    fontSize: 40,
    flex: 1, 
  },
});

const TabNavigator = createBottomTabNavigator({
  Face: { screen: Facebook },
  Insta: { screen: Instagram }
});

const AppContainer = createAppContainer(TabNavigator);