import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CUSTOM_COLORS from '../constants/color';
import {IMG_AboutElement} from '../assets/imgs';
import {FONT_FAMILY} from '../constants/font';
import CUSTOM_SIZES from '../constants/size';
import {scale} from '@shopify/react-native-skia';

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.contaier}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require('../assets/imgs/elementBg2.png')}>
        <Text style={styles.title}>About Us</Text>
        <Text style={styles.detailTxt}>
          Welcome to Henzesture, We are student of the 2021 (K16) class at
          University of Information Technology in Ho Chi Minh city. This website
          is our 2nd project, developed under the guidance of our instructor,
          Nguyen Tan Tran Minh Khang
        </Text>
        <View style={styles.box} />
        <Image style={styles.imgContainer} source={IMG_AboutElement} />
        <View style={styles.box} />
        <Text style={styles.title}>About Henzesture</Text>
        <Text style={styles.detailTxt}>
          Henzesture is a website developed for everyone to apply Artificial
          Intelligence to real life. The main functions are “Hand Gesture
          Recognition” and "Car Driving Game". Nonetheless, we have tried to
          develop more interesting functions for you such as “Realtime HGR”,
          “Control web by hand gesture”. These function are developed base on
          YOLO
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: CUSTOM_COLORS.primary,
    height: '100%',
    width: '100%',
    // justifyContent: 'space-around',
  },
  image: {
    height: '100%',
    padding: 0,
    justifyContent: 'center',
  },
  title: {
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
    fontSize: CUSTOM_SIZES.x2medium,
    textAlign: 'center',
    //backgroundColor: 'red',
    alignItems: 'center',
    textAlignVertical: 'center',
    color: CUSTOM_COLORS.white,
  },
  imgContainer: {
    height: '15%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  detailTxt: {
    fontFamily: FONT_FAMILY.PoppinsExtraLight,
    fontSize: CUSTOM_SIZES.small,
    textAlign: 'center',
    //backgroundColor: 'red',
    alignItems: 'center',
    textAlignVertical: 'center',
    color: CUSTOM_COLORS.white,
    marginHorizontal: 20,
  },
  box: {
    height: '5%',
  },
});
