import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLORS from '../constants/color';
import {FONT_FAMILY} from '../constants/font';
import CUSTOM_SIZES from '../constants/size';

export class PlashScreen extends Component {
  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate('HomeTabs');
    }, 3000);
  }
  render() {
    return (
      <SafeAreaView style={styles.contaier}>
        <ImageBackground
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/imgs/elementBg2.png')}>
          <Text style={styles.appName}>Henzesture</Text>
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
  appName: {
    fontFamily: FONT_FAMILY.PoppinsBlack,
    fontSize: CUSTOM_SIZES.xLarge,
    alignSelf: 'center',
    alignItems: 'center',
  },
});

export default PlashScreen;
