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
import {Canvas} from '@shopify/react-native-skia';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useFrameProcessor
} from 'react-native-vision-camera';
import {
  Tensor,
  TensorflowModel,
  useTensorflowModel,
} from 'react-native-fast-tflite'
import { useResizePlugin } from 'vision-camera-resize-plugin'
import HomeScreen from './home_screen';


function tensorToString(tensor: Tensor): string {
  return `\n  - ${tensor.dataType} ${tensor.name}[${tensor.shape}]`
}
function modelToString(model: TensorflowModel): string {
  return (
    `TFLite Model (${model.delegate}):\n` +
    `- Inputs: ${model.inputs.map(tensorToString).join('')}\n` +
    `- Outputs: ${model.outputs.map(tensorToString).join('')}`
  )
}



const GameScreen = () => {
  const { hasPermission, requestPermission } = useCameraPermission()
  const device = useCameraDevice('back');
  if (!hasPermission) return <HomeScreen />;


  const model = useTensorflowModel(require('../assets/model/efficientdet.tflite'))
  const actualModel = model.state === 'loaded' ? model.model : undefined

  React.useEffect(() => {
    if (actualModel == null) return
    console.log(`Model loaded! Shape:\n${modelToString(actualModel)}]`)
  }, [actualModel])

  const { resize } = useResizePlugin()

  const frameProcessor = useFrameProcessor(
    (frame) => {
      'worklet'
      if (actualModel == null) {
        // model is still loading...
        return
      }

      console.log(`Running inference on ${frame}`)
      const resized = resize(frame, {
        scale: {
          width: 320,
          height: 320,
        },
        pixelFormat: 'rgb',
        dataType: 'uint8',
      })
      const result = actualModel.runSync([resized])
      const num_detections = result[3]?.[0] ?? 0
      console.log('Result: ' + num_detections)
    },
    [actualModel]
  )

  React.useEffect(() => {
    requestPermission()
  }, [requestPermission])

  console.log(`Model: ${model.state} (${model.model != null})`)


  if (device == null) return <HomeScreen />;
  return (
    <SafeAreaView style={styles.contaier}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require('../assets/imgs/elementBg2.png')}>
        <Text style={styles.title}>{'Car Driving'}</Text>
        <Camera
          outputOrientation="device"
          video={true}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          frameProcessor={frameProcessor}
          
        />
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
    flex: 1,
    //backgroundColor: 'red',
    alignItems: 'center',
    textAlignVertical: 'center',
    color: CUSTOM_COLORS.white,
  },
  cv: {
    flex: 10,
    backgroundColor: 'green',
  },
  camera: {
    flex: 1,
  },
});
