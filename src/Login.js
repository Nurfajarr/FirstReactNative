import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

export default class Login extends Component {
  Show1 = () => {
    alert('Welcome to login');
  };

  Show2 = (Num) => {
    alert(Num);
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
          }}
          placeholder="Masukan Username"
          placeholderTextColor="#bdc3c7"></TextInput>

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#3498db',
            margin: 10,
            borderRadius: 15,
          }}
          placeholder="Masukan Password"
          placeholderTextColor="#bdc3c7"></TextInput>

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#3498db',
            margin: 10,
            borderRadius: 15,
          }}
          defaultValue="Nurfajar"
          placeholderTextColor="#bdc3c7"></TextInput>

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#3498db',
            margin: 10,
            borderRadius: 15,
            paddingLeft: 20,
          }}
          defaultValue="Tes React"
          maxLength={5}
          editable={false}></TextInput>

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#3498db',
            margin: 10,
            borderRadius: 15,
          }}
          defaultValue="1999"
          maxLength={5}
          keyboardType={'number-pad'}
          editable={false}></TextInput>

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#3498db',
            margin: 10,
            borderRadius: 15,
          }}
          defaultValue="1999"
          secureTextEntry={true}></TextInput>

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#3498db',
            margin: 10,
            borderRadius: 15,
          }}
          multiline={true}
          numberOfLines={5}></TextInput>

        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#3498db',
            margin: 10,
            borderRadius: 15,
            backgroundColor: 'blue',
            color: 'white',
          }}></TextInput>

        <Button style={{}} title="Button Login" onPress={this.Show1}></Button>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#2c3e50',
//   },
// });
