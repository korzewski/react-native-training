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
      const {isFullScreen} = this.props
      
      let fullScreenButton = <Button style={styles.offset} title="Full screen" onPress={fullScreen.bind(this)} />
      if(isFullScreen) {
          fullScreenButton = <Button style={styles.offset} title="Hide full screen" onPress={hideFullScreen.bind(this)} />
      }
      
    return (
      <View style={styles.container}>
        <Icon name="face" size={100} />
      
        <Text style={styles.welcome}>
          React Native!!!
        </Text>
        
        <View style={styles.offset}>
            <Button title="Open Modal" onPress={openModal.bind(this)} />
        </View>
        
        <View style={styles.offset}>
            {fullScreenButton}
        </View>
      </View>
    );
  }
}

function openModal() {
    this.props.navigator.showModal({
        screen: "example.modal.content",
        title: "Modal!",
        passProps: {x: 'secret prop!'}, 
        animationType: 'slide-up',
    });
}

function fullScreen() {
    this.props.navigator.showModal({
        screen: "example.tab1",
        passProps: {
            isFullScreen: true,
        },
        navigatorStyle: {
            navBarHidden: true,
        },
        animationType: 'none',
    });
}

function hideFullScreen() {
    this.props.navigator.dismissModal({
        animationType: 'none',
    })
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
  offset: {
      margin: 10,
  },
});
