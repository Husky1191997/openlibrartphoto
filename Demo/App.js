import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './src/screen/main/Home';
import {ShowVideo} from './src/screen/main/Show-Video';
import {Login} from './src/screen/auth/Login';
import {Register} from './src/screen/auth/Register';
import {ForgotPassword} from './src/screen/auth/Forgot-Password';
import BottomSheetAnimated from './src/component/BottomSheetAnimated';
import BottomSheet from './src/component/BottomSheet';
import {HomeChat} from './src/component/Fail';
import {ListImage} from './src/component/ImagePicker';
import {CameraRoll} from './src/component/CameraRoll';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{
            headerTitleAlign: 'center',
          }}
          component={Login}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerTitleAlign: 'center',
          }}
          component={Home}
        />
        <Stack.Screen
          name="HomeChat"
          options={{
            headerTitleAlign: 'center',
          }}
          component={HomeChat}
        />
        <Stack.Screen
          name="Bkav"
          options={{
            headerTitleAlign: 'center',
          }}
          component={ShowVideo}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerTitleAlign: 'center',
          }}
          component={Register}
        />
        <Stack.Screen
          name="ForgotPassword"
          options={{
            headerTitleAlign: 'center',
          }}
          component={ForgotPassword}
        />
        <Stack.Screen
          name="BottomSheetAnimated"
          options={{
            headerTitleAlign: 'center',
          }}
          component={BottomSheetAnimated}
        />
        <Stack.Screen
          name="BottomSheet"
          options={{
            headerTitleAlign: 'center',
          }}
          component={BottomSheet}
        />
        <Stack.Screen
          name="ListImage"
          options={{
            headerTitleAlign: 'center',
          }}
          component={ListImage}
        />
        <Stack.Screen
          name="CameraRoll"
          options={{
            headerTitleAlign: 'center',
          }}
          component={CameraRoll}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
