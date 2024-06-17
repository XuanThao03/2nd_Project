import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//Implement gallery image picker
export const openImagePicker = async () => {
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };
  let file = {
    uri: '', // e.g. 'file:///path/to/file/image123.jpg'
    name: '', // e.g. 'image123.jpg',
    type: '', // e.g. 'image/jpg'
  };
  let wImg = 0;
  let hImg = 0;
  //Implement gallery image picker
  await launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('Image picker error: ', response.error);
    } else {
      file.uri = response.uri || response.assets?.[0]?.uri;
      file.type = response.type || response.assets?.[0]?.type;
      file.name = response.fileName || response.assets?.[0]?.fileName;
      wImg = response.assets?.[0]?.width;
      hImg = response.assets?.[0]?.height;

      console.log(file);
    }
  });
  return {file, wImg, hImg};
};

// Implement camera image picker
export const handleCameraLaunch = async () => {
  const options = {
    mediaType: 'photo',
    includeBase64: false,
    maxHeight: 2000,
    maxWidth: 2000,
  };

  let file = {
    uri: '', // e.g. 'file:///path/to/file/image123.jpg'
    name: '', // e.g. 'image123.jpg',
    type: '', // e.g. 'image/jpg'
  };
  let wImg = 0;
  let hImg = 0;
  await launchCamera(options, response => {
    if (response.didCancel) {
      console.log('User cancelled camera');
    } else if (response.error) {
      console.log('Camera Error: ', response.error);
    } else {
      file.uri = response.uri || response.assets?.[0]?.uri;
      file.type = response.type || response.assets?.[0]?.type;
      file.name = response.fileName || response.assets?.[0]?.fileName;
      wImg = response.assets?.[0]?.width;
      hImg = response.assets?.[0]?.height;

      console.log(file);
    }
  });
  return {file, wImg, hImg};
};
