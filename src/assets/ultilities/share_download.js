import CameraRoll from '@react-native-community/cameraroll';
import {Alert} from 'react-native';
import Share from 'react-native-share';
import {captureRef} from 'react-native-view-shot';

// download image
export const downloadImage = async viewRef => {
  try {
    // react-native-view-shot caputures component
    const uri = await captureRef(viewRef, {
      format: 'png',
      quality: 0.8,
    });
    console.log(uri);

    // cameraroll saves image
    const image = CameraRoll.save(uri, 'photo');
    if (image) {
      Alert.alert(
        '',
        'Image saved successfully.',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    }
  } catch (error) {
    console.log('error', error);
  }
};

// Share image
export const shareImage = async viewRef => {
  try {
    const uri = await captureRef(viewRef, {
      format: 'png',
      quality: 0.8,
    });
    console.log('uri', uri);
    const shareResponse = await Share.open({
      message:
        'My interesting exploration with ShareHoi.\nDownload Sharehoi at: https://bit.ly/ShareHoi',
      url: uri,
    });
    console.log('shareResponse', shareResponse);
  } catch (error) {
    console.log('error', error);
  }
};
