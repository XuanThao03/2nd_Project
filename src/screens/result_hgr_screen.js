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
import {
  IC_Camera,
  IC_Download,
  IC_Home,
  IC_Share,
  IC_Upload,
  IC_smallDownload,
  IC_smallUpload,
} from '../assets/icons';
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
import {
  handleCameraLaunch,
  openImagePicker,
} from '../assets/ultilities/importImage';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';
import {downloadImage, shareImage} from '../assets/ultilities/share_download';
import CircleButton from '../components/circle_button';

const ResultScreen = ({route}) => {
  const navigation = useNavigation();
  const viewRef = useRef();

  //file
  let file = {
    uri: '', // e.g. 'file:///path/to/file/image123.jpg'
    name: '', // e.g. 'image123.jpg',
    type: '', // e.g. 'image/jpg'
  };

  const {passedFile, w, h} = route.params;
  const [selectedImg, setSelectedImg] = useState(passedFile.uri);
  const [imgWidth, setImgWidth] = useState(w);
  const [imgHeight, setImgHeight] = useState(h);
  const [cvWidth, setCvWidth] = useState(0);
  const [cvHeight, setCvHeight] = useState(0);
  const [xImg, setXImg] = useState(0);
  const [selectedFile, setSelectedFile] = useState(passedFile);
  const [isLoading, SetIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [result, setResult] = useState([]);
  console.log(imgWidth, imgHeight);
  console.log(cvWidth, cvHeight);

  const data = [
    {
      id: 1,
      box: [
        256.91619873046875, 316.115478515625, 270.34039306640625,
        234.330810546875,
      ],
      class_id: 10,
      class_name: 'peace_inverted',
      confidence: 0.7765809297561646,
    },
  ];
  const data2 = [
    {
      key: 1,
      box: [
        468.29046630859375, 159.35006713867188, 258.2159423828125,
        259.9259033203125,
      ],
      class_id: 10,
      class_name: 'peace_inverted',
      confidence: 0.9093440771102905,
    },
    {
      key: 2,
      box: [
        209.34437561035156, 238.21836853027344, 244.72512817382812,
        246.98403930664062,
      ],
      class_id: 16,
      class_name: 'two_up',
      confidence: 0.9065592885017395,
    },
  ];
  const data3 = [
    {
      box: [
        232.71920776367188, 330.4185791015625, 159.8980255126953,
        175.26748657226562,
      ],
      class_id: 0,
      class_name: 'call',
      confidence: 0.896122932434082,
    },
  ];
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
        setResult(data);
      }
    } catch (err) {
      SetIsLoading(false);
      console.log(err);
      setErrorMessage(err.message);
    }
  };

  const image = useImage(selectedImg);

  // const {width, height} = Dimensions.get('window');
  const onLayout = event => {
    const {x, y, height, width} = event.nativeEvent.layout;
    setCvHeight(height);
    setCvWidth(width);
  };
  return (
    <SafeAreaView style={styles.contaier}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require('../assets/imgs/elementBg2.png')}>
        {/* <View style={{flexDirection: 'row'}}> */}
        <Text style={styles.title}>{'Hand Gesture \nRecognition'}</Text>

        <View style={styles.imgContainer}>
          {/* <Image style={styles.uploadImg} source={{uri: selectedImg}} /> */}
          {isLoading ? <ActivityIndicator size="large" /> : null}
          <Canvas style={styles.uploadImg} onLayout={onLayout} ref={viewRef}>
            <Image
              image={image}
              fit="contain"
              x={0}
              y={0}
              height={cvHeight}
              width={cvWidth}
            />
            {result.map(dt => {
              return (
                <Bbox
                  key={dt.class_id}
                  x={dt.box[0]}
                  y={dt.box[1]}
                  w={dt.box[2]}
                  h={dt.box[3]}
                  imgW={imgWidth}
                  imgH={imgHeight}
                  scale={cvWidth / imgWidth}
                  label={dt.class_name}
                  xImg={(cvHeight - (cvWidth / imgWidth) * imgHeight) / 2}
                />
              );
            })}
          </Canvas>
        </View>
        <View style={styles.actionContainer}>
          <View style={{alignItems: 'center', paddingBottom: scale(10, 'h')}}>
            <SmallButton title="Predict" onPressed={predict} />
          </View>

          <View style={styles.rowBtn}>
            <CircleButton
              icon={<IC_Download />}
              onPressed={() => {
                downloadImage(viewRef);
              }}
            />
            <CircleButton
              icon={<IC_Share />}
              onPressed={() => {
                shareImage(viewRef);
              }}
            />
            <CircleButton
              icon={<IC_smallUpload />}
              onPressed={async () => {
                let value = await openImagePicker();
                if (value.file.name != '') {
                  setSelectedFile(value.file);
                  setSelectedImg(value.file.uri);
                  setImgWidth(value.wImg);
                  setImgHeight(value.hImg);
                  setResult([]);
                }
              }}
            />
            <CircleButton
              icon={<IC_Camera />}
              onPressed={async () => {
                let value = await handleCameraLaunch();
                if (value.file.name != '') {
                  setSelectedFile(value.file);
                  setSelectedImg(value.file.uri);
                  setImgWidth(value.wImg);
                  setImgHeight(value.hImg);
                  setResult([]);
                }
              }}
            />
          </View>
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
    // backgroundColor: 'yellow',
  },
  btn: {
    height: scale(43, 'h'),
  },
  rowBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // backgroundColor: 'yellow',
    paddingVertical: scale(10, 'h'),
  },
});
