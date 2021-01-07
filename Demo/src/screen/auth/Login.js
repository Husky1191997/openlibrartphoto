import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
export class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeader}>Wellcome to Bkav</Text>
        <Image
          source={require('../../assets/image/bkav2.jpg')}
          style={styles.imageSlider}
        />
        <View style={styles.formLogin}>
          <View style={styles.viewInput}>
            <Text style={styles.title}>Username</Text>
            <TextInput
              placeholder="Nhap ten nguoi dung"
              style={styles.inputText}
              maxLength={40}
              value={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
            />
          </View>
          <View style={styles.emptyView} />
          <View style={styles.viewInput}>
            <Text style={styles.title}>Password</Text>
            <TextInput
              placeholder="Nhap mat khau"
              maxLength={40}
              secureTextEntry={true}
              style={styles.inputText}
              value={this.state.password}
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
          <TouchableOpacity
            style={{height: 40}}
            onpress={() => {
              console.log('Forgot password');
              navigation.navigate('ForgotPassword');
            }}>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('Forgot password');
            navigation.navigate('HomeChat');
          }}
          style={styles.buttonLogin}>
          <Text style={styles.titleButton}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.emptyView} />
        <Text style={{color: 'gray'}}>
          Don't have account?{' '}
          <Text
            onpress={() => navigation.navigate('Register')}
            style={{fontWeight: 'bold', color: 'black'}}>
            Create
          </Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  formLogin: {
    marginTop: 5,
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width,
  },
  emptyView: {
    height: Dimensions.get('window').height * 0.05,
  },
  viewInput: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  titleHeader: {
    fontSize: 22,
    color: 'black',
  },
  buttonLogin: {
    height: 30,
    width: Dimensions.get('window').width * 0.3,
    backgroundColor: 'orange',
    borderRadius: 5,
    alignItems: 'center',
  },
  titleButton: {
    padding: 5,
  },
  inputText: {
    fontSize: 12,
    borderWidth: 1,
    height: 35,
    width: Dimensions.get('window').width * 0.6,
  },
  title: {
    marginVertical: 5,
  },
  imageSlider: {
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  optionAction: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 5,
  },
  forgotPassword: {
    color: 'gray',
    marginLeft: Dimensions.get('window').width * 0.6 - 20,
    marginVertical: 10,
    marginRight: 40,
  },
});
