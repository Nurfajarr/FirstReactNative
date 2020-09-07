import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            backgroundColor: '#000',
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
            letterSpacing: 5,
          }}>
          Header
        </Text>
      </View>
    );
  }
}
