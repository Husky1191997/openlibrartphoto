import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {WebView} from 'react-native-webview';
import VideoPlayer from '../../component/Video-Player';
export function ShowVideo({route}) {
  const {option} = route.params;
  console.log('option', option);
  let arrayLinkVideo = [
    'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
    'http://techslides.com/demos/sample-videos/small.mp4',
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];
  return (
    <View style={styles.container}>
      <VideoPlayer
        video={{
          uri:
            arrayLinkVideo[option - 1] !== ''
              ? arrayLinkVideo[option - 1]
              : 'http://techslides.com/demos/sample-videos/small.mp4',
        }}
        style={styles.videoBox}
      />
      <Text style={{fontSize: 24, color: 'red'}}>
        Phim gioi thieu ve Bkav - Tap {option}
      </Text>
      <WebView source={{uri: 'https://m.youtube.com/watch?v=EMX0_Ivf4ws'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  videoBox: {
    margin: 20,
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width,
  },
  controlBar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonControl: {
    width: 30,
    height: 30,
  },
});
