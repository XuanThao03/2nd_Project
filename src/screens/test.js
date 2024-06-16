import {Canvas, Text, useFont, Fill} from '@shopify/react-native-skia';
export const HelloWorld = () => {
  const fontSize = 32;
  const font = useFont(require('../assets/fonts/Poppins-Black.ttf'), fontSize);
  return (
    <Canvas style={{flex: 1}}>
      <Fill color="white" />
      <Text x={0} y={fontSize} text="Hello World" font={font} />
    </Canvas>
  );
};
