import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLORS from '../constants/color';
import {FONT_FAMILY} from '../constants/font';
import CUSTOM_SIZES from '../constants/size';
import {IC_Bell, IC_Game, IC_Info} from '../assets/icons';
import scale from '../constants/responsive';
import {IMG_HGR_EX} from '../assets/imgs';
import SmallButton from '../components/small_button';
import {Screen} from 'react-native-screens';

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.contaier}>
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/imgs/elementBg2.png')}>
          <View style={styles.appBar}>
            <IC_Bell style={styles.topIC} />
            <IC_Info style={styles.topIC} />
          </View>
          <View style={styles.introContainer}>
            <Text style={styles.txtIntro}>AN</Text>
            <Text style={styles.txtIntro}>ADVANCED AI</Text>
            <Text style={styles.txtSubIntro}>Explore The Meaning Of</Text>
            <Text style={styles.txtBoldIntro}>Hand Gesture</Text>

            <SmallButton
              title="Try Now"
              onPressed={() => {
                this.props.navigation.navigate('DetectStack', {
                  screen: 'Detect',
                });
              }}
            />
          </View>
          <View style={styles.imgIllu}>
            <View style={styles.illusContainer}>
              <Text style={styles.txtBoldIntro}>HGR</Text>
              <Text style={styles.txtSmall}>Hand Gesture Recognition</Text>
              <Image style={styles.imgContainer} source={IMG_HGR_EX} />
            </View>
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
  },
  appBar: {
    //backgroundColor: CUSTOM_COLORS.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  introContainer: {
    //backgroundColor: 'pink',
    flex: 4,
    paddingHorizontal: CUSTOM_SIZES.x2Large,
    justifyContent: 'center',
  },
  imgIllu: {
    //backgroundColor: 'red',
    flex: 6,
    paddingHorizontal: CUSTOM_SIZES.x2Large,
  },
  topIC: {
    marginRight: CUSTOM_SIZES.medium,
  },
  txtIntro: {
    fontFamily: FONT_FAMILY.PoppinsBlack,
    fontSize: CUSTOM_SIZES.x3Large,
    // backgroundColor: 'green',
    lineHeight: 50,
    color: CUSTOM_COLORS.white,
  },
  txtSubIntro: {
    fontFamily: FONT_FAMILY.PoppinsLight,
    fontSize: CUSTOM_SIZES.x2medium,
    color: CUSTOM_COLORS.white,
  },
  txtBoldIntro: {
    fontFamily: FONT_FAMILY.PoppinsBold,
    fontSize: CUSTOM_SIZES.x2medium,
    color: CUSTOM_COLORS.white,
    lineHeight: 30,
  },

  imgContainer: {
    height: '80%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: scale(45, 'w'),
    marginTop: scale(5, 'h'),
  },
  illusContainer: {
    height: '75%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.09)',
    borderWidth: scale(1, 'w'),
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: scale(45, 'w'),
    padding: scale(20, 'h'),
  },
  txtSmall: {
    fontFamily: FONT_FAMILY.PoppinsLight,
    fontSize: CUSTOM_SIZES.small,
    color: CUSTOM_COLORS.white,
  },
});

export default HomeScreen;
