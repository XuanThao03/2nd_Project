import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Button,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {Component, useEffect, useRef, useState} from 'react';
import CUSTOM_COLORS from '../constants/color';
import CUSTOM_SIZES from '../constants/size';
import {FONT_FAMILY} from '../constants/font';
import scale from '../constants/responsive';
import {IC_Upload} from '../assets/icons';
import {IMG_HGR_EX2} from '../assets/imgs';
import SmallButton from '../components/small_button';
import LargeButton from '../components/large_button';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  Canvas,
  CornerPathEffect,
  Image,
  useImage,
  Rect,
  Fill,
  Box,
  BoxShadow,
  rrect,
  rect,
  Paint,
  vec,
  Group,
  Text as RNSText,
  useFont,
} from '@shopify/react-native-skia';
import axios from 'axios';
import {Circle} from 'react-native-svg';
import {useNavigation} from '@react-navigation/native';
import Bbox from '../components/bbbox';

const ResultScreen = ({route}) => {
  const navigation = useNavigation();

  const {passedImg, passedFile, w, h} = route.params;
  const [selectedImg, setSelectedImg] = useState(passedImg);
  const [imgWidth, setImgWidth] = useState(w);
  const [imgHeight, setImgHeight] = useState(h);
  const [selectedFile, setSelectedFile] = useState(passedFile);
  const [isLoading, SetIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const canvasRef = useRef(null);
  let scale = 2;

  // predict
  const predict = async () => {
    var fileData = new FormData();

    fileData.append('file', selectedFile);
    console.log('fileData', selectedFile);
    try {
      SetIsLoading(true);

      const url = 'https://handgestureserver.onrender.com/predict';
      const {data} = await axios.post(url, fileData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setErrorMessage(null);
      if (data) {
        console.log(data);
        SetIsLoading(false);
        //   // canvas.width = selectedFile.width;
        //   // canvas.height = selectedFile.height;
        //   // ctx.drawImage(
        //   //   selectedFile,
        //   //   0,
        //   //   0,
        //   //   selectedFile.width,
        //   //   selectedFile.height,
        //   // );
        data.map(dt => (
          <Canvas ref={canvasRef} style={styles.uploadImg}>
            <Image
              image={image}
              fit="cover"
              x={0}
              y={0}
              height={imgHeight}
              width={imgWidth}
            />
            <Group style="stroke" strokeWidth={1}>
              <Rect
                x={dt.box[0]}
                y={dt.box[1]}
                width={dt.box[3]}
                height={dt.box[4]}
                color="red"
              />
            </Group>

            <RNSText x={0} y={fontSize} text="Hello World" font={font} />
          </Canvas>
        ));
      }
    } catch (err) {
      SetIsLoading(false);
      console.log(err);
      setErrorMessage(err.message);
    }
    // SetIsLoading(true);
    // let res = await fetch(`https://handgestureserver.onrender.com/predict`, {
    //   method: 'post',
    //   body: fileData,
    //   headers: {
    //     'Content-Type': 'multipart/form-data; ',
    //   },
    // });
    // if (res) SetIsLoading(false);
    // console.log('res', res);
    // let responseJson = await res.json();
    // if (responseJson.status == 1) {
    //   alert('Upload Successful');
    // }
  };

  //pick img
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        let base64Image = response.base64 | response.assets?.[0]?.base64;
        setSelectedImg(imageUri);
        setSelectedFile(response.assets?.[0]);

        console.log('uri', imageUri);
      }
    });
  };
  const image = useImage(selectedImg);

  const {width, height} = Dimensions.get('window');
  const fontSize = 32;
  const font = useFont(require('../assets/fonts/Poppins-Black.ttf'), fontSize);
  return (
    <SafeAreaView style={styles.contaier}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require('../assets/imgs/elementBg2.png')}>
        <Text style={styles.title}>{'Hand Gesture \nRecognition'}</Text>
        <View style={styles.imgContainer}>
          {/* <Image style={styles.uploadImg} source={{uri: selectedImg}} /> */}
          {isLoading ? <ActivityIndicator size="large" /> : null}
          <Canvas ref={canvasRef} style={styles.uploadImg}>
            <Image
              image={image}
              fit="cover"
              x={0}
              y={0}
              height={imgHeight}
              width={imgWidth}
            />
            {/* <Group style="stroke" strokeWidth={1}>
              <Rect x={0} y={0} width={256} height={256} color="red" />
            </Group> */}
            <Bbox
              x={256.91619873046875}
              y={316.115478515625}
              w={270.34039306640625}
              h={234.330810546875}
              imgW={w}
              imgH={h}
            />

            {/* <RNSText x={0} y={fontSize} text="Hello World" font={font} /> */}
          </Canvas>
        </View>
        <View style={styles.actionContainer}>
          <View style={styles.rowBtn}>
            <SmallButton title="Predict" onPressed={predict} />
            <SmallButton
              title="Download"
              onPressed={() => {
                navigation.navigate('DetectStack', {
                  screen: 'Test',
                });
              }}
            />
          </View>
          <LargeButton
            title="Upload another image"
            onPressed={() => openImagePicker()}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ResultScreen;

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
    color: CUSTOM_COLORS.white,
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
    backgroundColor: 'yellow',
  },
  btn: {
    height: scale(43, 'h'),
  },
  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
