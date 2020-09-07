import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';

export default class GetValueOfTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {NUM1: ''};
  }
  F1 = () => {
    var N1 = this.state.NUM1;
    alert(N1);
  };

  render() {
    return (
      <View>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#3498db',
            margin: 10,
            borderRadius: 15,
            paddingLeft: 10,
          }}
          onChangeText={(NUM1) => this.setState({NUM1})}
          placeholder="Input Text"></TextInput>
        <Button
          title="Show Popup"
          style={{margin: 10}}
          onPress={this.F1}></Button>
      </View>
    );
  }
}
