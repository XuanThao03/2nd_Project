import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {FONT_FAMILY} from '../constants/font';
import CUSTOM_SIZES from '../constants/size';
import CUSTOM_COLORS from '../constants/color';

const GameScreen = () => {
  return (
    <SafeAreaView style={styles.contaier}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require('../assets/imgs/elementBg2.png')}>
        <Text style={styles.title}>{'Hand Gesture \nRecognition'}</Text>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default GameScreen;

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
  },
  title: {
    fontFamily: FONT_FAMILY.PoppinsSemiBold,
    fontSize: CUSTOM_SIZES.x2medium,
    textAlign: 'center',
    flex: 1.5,
    //backgroundColor: 'red',
    alignItems: 'center',
    textAlignVertical: 'center',
    color: CUSTOM_COLORS.white,
  },
});
