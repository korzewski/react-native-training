import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Icon name="bug-report" size={100} />
        
        <ScrollView>
            <Text style={styles.report}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quam ipsum maxime, doloribus dolor quos, obcaecati asperiores dolores recusandae omnis quibusdam magni, laboriosam voluptates, aperiam vitae. Qui corporis, reiciendis debitis!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic perspiciatis accusamus totam earum eius. Unde voluptatibus, totam, dolores fuga ut quas ipsa repellendus, illum officia, perferendis reprehenderit laudantium maiores earum?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic perspiciatis accusamus totam earum eius. Unde voluptatibus, totam, dolores fuga ut quas ipsa repellendus, illum officia, perferendis reprehenderit laudantium maiores earum?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic perspiciatis accusamus totam earum eius. Unde voluptatibus, totam, dolores fuga ut quas ipsa repellendus, illum officia, perferendis reprehenderit laudantium maiores earum?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic perspiciatis accusamus totam earum eius. Unde voluptatibus, totam, dolores fuga ut quas ipsa repellendus, illum officia, perferendis reprehenderit laudantium maiores earum?
            </Text>
        </ScrollView>
        
        <View style={styles.offset}>
            <Button title="Close" onPress={goBack.bind(this)} />
        </View>
      </View>
    );
  }
}

function goBack() {
    this.props.navigator.popToRoot({
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
  },
  offset: {
      margin: 20,
  },
});
