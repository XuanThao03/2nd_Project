import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Canvas,
  Group,
  Image,
  Rect,
  Text,
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
  return (
    <Group style="stroke" strokeWidth={1}>
      <Text
        x={left}
        y={top - 5}
        text="Hello World"
        font={font}
        color={'white'}
      />
      <Rect
        x={left}
        y={top}
        width={right - left}
        height={bottom - top}
        color="red"
      />
    </Group>
  );
};

export default Bbox;

const styles = StyleSheet.create({});
