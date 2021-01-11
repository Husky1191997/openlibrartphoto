import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Switch,
  ScrollView,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import {
  KeyboardAccessoryView,
  KeyboardUtils,
} from 'react-native-keyboard-input';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
import PropTypes from 'prop-types';
import '../component/KeyboardView';

const IsIOS = Platform.OS === 'ios';
const TrackInteractive = true;

export class HomeChat extends React.Component {
  static propTypes = {
    message: PropTypes.string,
  };
  constructor() {
    super();
    this.keyboardAccessoryViewContent = this.keyboardAccessoryViewContent.bind(
      this,
    );
    this.onKeyboardItemSelected = this.onKeyboardItemSelected.bind(this);
    this.resetKeyboardView = this.resetKeyboardView.bind(this);
    this.onKeyboardResigned = this.onKeyboardResigned.bind(this);
    this.showLastKeyboard = this.showLastKeyboard.bind(this);
    this.isCustomKeyboardOpen = this.isCustomKeyboardOpen.bind(this);
    this.state = {
      customKeyboard: {
        component: undefined,
        initialProps: undefined,
      },
      receivedKeyboardData: undefined,
      useSafeArea: true,
      keyboardOpenState: false,
    };
  }

  onKeyboardResigned() {
    this.setState({keyboardOpenState: false});
    this.resetKeyboardView();
  }

  onKeyboardItemSelected(keyboardId, params) {
    console.log('Ahihi', params);
    const receivedKeyboardData = `onItemSelected from "${keyboardId}"\nreceived params: ${JSON.stringify(
      params,
    )}`;
    this.setState({receivedKeyboardData});
  }

  resetKeyboardView() {
    this.setState({customKeyboard: {}});
  }

  isCustomKeyboardOpen = () => {
    const {keyboardOpenState, customKeyboard} = this.state;
    return keyboardOpenState && !_.isEmpty(customKeyboard);
  };

  showLastKeyboard() {
    const {customKeyboard} = this.state;
    this.setState({customKeyboard: {}});

    setTimeout(() => {
      this.setState({
        keyboardOpenState: true,
        customKeyboard,
      });
    }, 500);
  }

  onPressScreen1 = () => {
    this.showKeyboardView('KeyboardView', 'Gia dinh la so 1');
  };

  onPressScreen2 = () => {
    this.showKeyboardView(
      'AnotherKeyboardView',
      'Doi vk len dau => truong sinh bat tu',
    );
  };

  showKeyboardView(component, title) {
    this.setState({
      keyboardOpenState: true,
      customKeyboard: {
        component,
        initialProps: {title},
      },
    });
  }

  keyboardAccessoryViewContent() {
    return (
      <View style={{flexDirection: 'row', height: 50, backgroundColor: 'gray'}}>
        <TouchableOpacity
          onPress={this.onPressScreen1}
          style={{paddingLeft: 15, height: 30, margin: 10}}>
          <Text>Screen1</Text>
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <AutoGrowingTextInput
            maxHeight={200}
            style={styles.textInput}
            ref={(r) => {
              this.textInputRef = r;
            }}
            placeholder={'Message'}
            underlineColorAndroid="transparent"
            onFocus={() => this.resetKeyboardView()}
            testID={'input'}
          />
        </View>
        <TouchableOpacity
          onPress={this.onPressScreen2}
          style={{paddingLeft: 15, height: 30, margin: 10}}>
          <Text>Screen2</Text>
        </TouchableOpacity>
      </View>
    );
  }

  safeAreaSwitchToggle = () => {
    if (!IsIOS) {
      return <View />;
    }
    const {useSafeArea} = this.state;
    return (
      <View style={styles.safeAreaSwitchContainer}>
        <Text>Safe Area Enabled:</Text>
        <Switch
          style={styles.switch}
          value={useSafeArea}
          onValueChange={this.toggleUseSafeArea}
        />
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeader}>Bkav Entertainment</Text>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardDismissMode={TrackInteractive ? 'interactive' : 'none'}>
          <Text style={styles.welcome}>
            {this.props.message ? this.props.message : 'Keyboards example'}
          </Text>
          <Text testID={'demo-message'}>{this.state.receivedKeyboardData}</Text>
          {this.safeAreaSwitchToggle()}
        </ScrollView>
        <KeyboardAccessoryView
          renderContent={this.keyboardAccessoryViewContent}
          onHeightChanged={(height) =>
            this.setState({
              keyboardAccessoryViewHeight: IsIOS ? height : undefined,
            })
          }
          trackInteractive={TrackInteractive}
          kbInputRef={this.textInputRef}
          kbComponent={this.state.customKeyboard.component}
          kbInitialProps={this.state.customKeyboard.initialProps}
          onItemSelected={this.onKeyboardItemSelected}
          onKeyboardResigned={this.onKeyboardResigned}
          revealKeyboardInteractive
          useSafeArea={this.state.useSafeArea}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  scrollContainer: {
    justifyContent: 'center',
    padding: 15,
    flex: 1,
  },
  titleHeader: {
    color: 'orange',
    fontSize: 28,
  },

  inputContainer: {
    height: 50,
    width: Dimensions.get('window').width * 0.5,
    marginBottom: 25,
  },
  keyboardContainer: {
    ...Platform.select({
      ios: {
        flex: 1,
        backgroundColor: 'white',
      },
    }),
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 5,
    color: 'white',
  },
  sendButton: {
    paddingRight: 15,
    paddingLeft: 15,
    alignSelf: 'center',
  },
  switch: {
    marginLeft: 15,
    // backgroundColor: 'red',
  },
  safeAreaSwitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
