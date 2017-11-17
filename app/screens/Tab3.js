import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="bug-report" size={100} />
        
        <Button title="Show bug report" onPress={openBugReport.bind(this)} />
      </View>
    );
  }
}

function openBugReport() {
    this.props.navigator.push({
        screen: 'example.tab3a',
        title: 'Bug report',
        animationType: 'fade',
    });
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
