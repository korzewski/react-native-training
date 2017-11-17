import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class ModalContent extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="visibility" size={100} />
      
        <Text style={styles.welcome}>
          ModalContent!
        </Text>
        
        <Text style={styles.secretProp}>
          this.props.x = {this.props.x}
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
    margin: 10,
  },
  secretProp: {
      fontSize: 20,
  }
});
