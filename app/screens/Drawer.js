import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Drawer extends Component<{}> {
  render() {
      
    return (
      <View style={styles.container}>
        <Icon name="compare-arrows" size={100} />
      
        <Text style={styles.welcome}>
            {this.props.title}
        </Text>
      </View>
    );
  }
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
