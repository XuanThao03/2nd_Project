import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component, useState} from 'react';
import CUSTOM_COLORS from '../constants/color';
import {FONT_FAMILY} from '../constants/font';
import CUSTOM_SIZES from '../constants/size';
import {IMG_ElementDetect, IMG_HGR_EX} from '../assets/imgs';
import scale from '../constants/responsive';
import {IC_Upload} from '../assets/icons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import SmallButton from '../components/small_button';
import {
  handleCameraLaunch,
  openImagePicker,
} from '../assets/ultilities/importImage';

const DetectScreen = () => {
  const navigation = useNavigation();
  let file = {
    uri: '', // e.g. 'file:///path/to/file/image123.jpg'
    name: '', // e.g. 'image123.jpg',
    type: '', // e.g. 'image/jpg'
  };

  return (
    <SafeAreaView style={styles.contaier}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require('../assets/imgs/elementBg2.png')}>
        <Text style={styles.title}>{'Hand Gesture \nRecognition'}</Text>
        <Image
          style={styles.imgElement}
          resizeMode="contain"
          source={IMG_ElementDetect}
        />
        <View style={styles.uploadContainer}>
          <View style={styles.illusContainer}>
            <TouchableOpacity
              style={styles.imgContainer}
              onPress={async () =>
                // this.props.navigation.navigate('DetectStack', {
                //   screen: 'Result',
                // })
                {
                  let value = await openImagePicker();
                  // console.log(value);
                  if (value.file.name != '') {
                    console.log('value', value);
                    navigation.navigate('DetectStack', {
                      screen: 'Result',
                      params: {
                        passedFile: value.file,
                        w: value.wImg,
                        h: value.hImg,
                      },
                    });
                  }
                }
              }>
              <IC_Upload />
              <Text style={styles.txtMedium}>Upload your image</Text>
            </TouchableOpacity>
            <Text>OR</Text>
            <SmallButton
              onPressed={async () => {
                let value = await handleCameraLaunch();
                // console.log(value);
                if (value.file.name != '' && value.file.name != undefined) {
                  console.log('value', value);
                  navigation.navigate('DetectStack', {
                    screen: 'Result',
                    params: {
                      passedFile: value.file,
                      w: value.wImg,
                      h: value.hImg,
                    },
                  });
                }
              }}
              title="Take picture"
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default DetectScreen;

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
  imgElement: {
    height: '30%',
    //backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    flex: 3.5,
    marginVertical: scale(15, 'h'),
  },
  uploadContainer: {
    flex: 6,
    paddingHorizontal: CUSTOM_SIZES.x2Large,
  },
  illusContainer: {
    height: '75%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    borderWidth: scale(1, 'w'),
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: scale(45, 'w'),
    padding: scale(20, 'h'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtBoldIntro: {
    fontFamily: FONT_FAMILY.PoppinsBold,
    fontSize: CUSTOM_SIZES.x2medium,
    color: CUSTOM_COLORS.white,
    lineHeight: 30,
  },
  txtSmall: {
    fontFamily: FONT_FAMILY.PoppinsLight,
    fontSize: CUSTOM_SIZES.small,
    color: CUSTOM_COLORS.white,
  },
  txtMedium: {
    fontFamily: FONT_FAMILY.PoppinsLight,
    fontSize: CUSTOM_SIZES.small,
    color: CUSTOM_COLORS.white,
  },
  imgContainer: {
    //backgroundColor: 'white',
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
