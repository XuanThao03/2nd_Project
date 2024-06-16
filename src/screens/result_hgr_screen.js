import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLORS from '../constants/color';
import CUSTOM_SIZES from '../constants/size';
import {FONT_FAMILY} from '../constants/font';
import scale from '../constants/responsive';
import {IC_Upload} from '../assets/icons';
import {IMG_HGR_EX2} from '../assets/imgs';
import SmallButton from '../components/small_button';
import LargeButton from '../components/large_button';

export default class ResultScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.contaier}>
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/imgs/elementBg2.png')}>
          <Text style={styles.title}>{'Hand Gesture \nRecognition'}</Text>
          <View style={styles.imgContainer}>
            <Image style={styles.uploadImg} source={IMG_HGR_EX2} />
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.rowBtn}>
              <SmallButton title="Predict" onPressed={() => {}} />
              <SmallButton title="Download" onPressed={() => {}} />
            </View>
            <LargeButton title="Predict" onPressed={() => {}} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: CUSTOM_COLORS.primary,
    height: '100%',
    width: '100%',
  },
  image: {
    height: '100%',
    padding: 0,
    justifyContent: 'center',
    paddingHorizontal: scale(20, 'w'),
  },
  title: {
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
    fontSize: CUSTOM_SIZES.x2medium,
    textAlign: 'center',
    flex: 1.2,
    //backgroundColor: 'red',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  imgContainer: {
    flex: 6,
    //backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionContainer: {
    //backgroundColor: 'yellow',
    flex: 3,
  },
  uploadImg: {
    height: '100%',
    width: '100%',
    borderRadius: scale(45, 'w'),
    borderWidth: scale(0.75, 'w'),
    borderColor: CUSTOM_COLORS.hover,
  },
  btn: {
    height: scale(43, 'h'),
  },
  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
