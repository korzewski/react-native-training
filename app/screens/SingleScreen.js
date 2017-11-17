import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class SingleScreen extends Component<{}> {
  render() {
      
    return (
      <View style={styles.container}>
        <Icon name="home" size={100} />
      
        <Text style={styles.welcome}>
            Single screen
        </Text>
      </View>
    );
  }
}

function openTabsScreen() {
    console.log('openTabsScreen')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
});
