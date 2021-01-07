import React from 'react';
import {StyleSheet, ScrollView, TextInput, View, Button} from 'react-native';
import {KeyboardAccessoryView} from 'react-native-keyboard-accessory';
import VirtualKeyboard from 'react-native-virtual-keyboard';
export class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }
  changeText = (text) => {
    this.setState({value: text});
  };

  render() {
    return (
      <KeyboardAccessoryView alwaysVisible={true} androidAdjustResize>
        {({isKeyboardVisible}) => (
          <View style={styles.textInputView}>
            <TextInput
              placeholder="Write your message"
              underlineColorAndroid="transparent"
              style={styles.textInput}
              multiline={true}
            />
          </View>
        )}
      </KeyboardAccessoryView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
