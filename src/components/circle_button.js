import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '@shopify/react-native-skia';
import CUSTOM_COLORS from '../constants/color';
import {FONT_FAMILY} from '../constants/font';
import CUSTOM_SIZES from '../constants/size';

const CircleButton = props => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onPressed}>
      {props.icon}
    </TouchableOpacity>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  btn: {
    height: 44,
    width: 44,
    backgroundColor: CUSTOM_COLORS.hover,
    borderRadius: 32,
    marginTop: scale(20, 'h'),
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  txtBtn: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
    fontSize: CUSTOM_SIZES.medium,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
