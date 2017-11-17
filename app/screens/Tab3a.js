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
        
        <Text style={styles.report}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quam ipsum maxime, doloribus dolor quos, obcaecati asperiores dolores recusandae omnis quibusdam magni, laboriosam voluptates, aperiam vitae. Qui corporis, reiciendis debitis!
          .....
        </Text>
        
        <Button title="Show more details" onPress={openMoreDetails.bind(this)} />
      </View>
    );
  }
}

function openMoreDetails() {
    this.props.navigator.push({
        screen: 'example.tab3b',
        title: 'Bug report - more details',
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
  report: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
    margin: 10,
  },
});
