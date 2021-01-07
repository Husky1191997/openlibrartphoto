import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const star = 12;
let arrayStar = Array(star).fill(1, 0, star);
const arrayLink = [
  'https://i.ytimg.com/vi/qKLYPPpB8Qc/mqdefault.jpg',
  'https://hpconnect.vn/wp-content/uploads/2019/09/dich-vu-ghep-anh-chuyen-nghiep-hpconnect-2.jpg',
  'https://cdn.tgdd.vn/Files/2019/01/01/1142002/s8ori_800x600.jpg',
  'https://znews-photo.zadn.vn/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2yBr3WDaeQhkUEh-JsuFCMjEzhdrJBz479Q&usqp=CAU',
];
let random = Math.floor(Math.random() * arrayLink.length);
console.log(random, arrayLink[random]);

export class ListVideo extends Component {
  render() {
    return (
      <View style={styles.listVideo}>
        <ScrollView>
          {arrayStar.map((_n, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                this.props.navigation.navigate('Bkav', {option: index + 1})
              }>
              <View style={styles.buttonOnpress}>
                <Image
                  source={{
                    uri: arrayLink[random],
                  }}
                  style={styles.showVideo}
                />
                <Text style={styles.titleVideo}>Bkav tap {index + 1}</Text>
              </View>
              <View style={styles.emptyView} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listVideo: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.6,
  },
  buttonOnpress: {
    flexDirection: 'row',
    marginHorizontal: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 0.3,
  },
  showVideo: {
    width: Dimensions.get('window').width * (1 / 2),
  },
  titleVideo: {
    width: Dimensions.get('window').width * (1 / 2),
    margin: 20,
  },
  emptyView: {
    height: 20,
  },
});
