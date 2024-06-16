import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import scale from '../constants/responsive';
import CUSTOM_COLORS from '../constants/color';
import {FONT_FAMILY} from '../constants/font';
import CUSTOM_SIZES from '../constants/size';

const LargeButton = props => {
  return (
    <TouchableOpacity style={styles.btn} onPress={props.onrPessed}>
      <Text style={styles.txtBtn}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default LargeButton;

const styles = StyleSheet.create({
  btn: {
    height: scale(43, 'h'),
    width: '100%',
    backgroundColor: CUSTOM_COLORS.hover,
    borderRadius: scale(15, 'w'),
    marginTop: scale(20, 'h'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtBtn: {
    fontFamily: FONT_FAMILY.PoppinsMedium,
    fontSize: CUSTOM_SIZES.medium,
  },
});
