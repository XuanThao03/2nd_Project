import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Canvas,
  Group,
  Image,
  Rect,
  Text,
  scale,
  useFont,
} from '@shopify/react-native-skia';

const Bbox = props => {
  const IMG_SIZE = 640;
  const fontSize = 14;
  const font = useFont(require('../assets/fonts/Poppins-Light.ttf'), fontSize);
  //   if (img.width * scale > 640 || img.height * scale > 640) scale = 0.5;
  const imgScaleX = props.imgW / IMG_SIZE;
  const imgScaleY = props.imgH / IMG_SIZE;
  const left = imgScaleX * (props.x - props.w / 2);
  const top = imgScaleY * (props.y - props.h / 2);
  const right = imgScaleX * (props.x + props.w / 2);
  const bottom = imgScaleY * (props.y + props.h / 2);
  console.log(props.scale);
  console.log('xImage', props.xImg);
  console.log('top', top * props.scale);
  return (
    <Group style="stroke" strokeWidth={1}>
      <Text
        x={left * props.scale}
        y={top * props.scale - 5 + props.xImg}
        text={props.label}
        font={font}
        color={'white'}
      />
      <Rect
        x={left * props.scale}
        y={top * props.scale + props.xImg}
        width={(right - left) * props.scale}
        height={(bottom - top) * props.scale}
        color="red"
      />
    </Group>
  );
};

export default Bbox;

const styles = StyleSheet.create({});
