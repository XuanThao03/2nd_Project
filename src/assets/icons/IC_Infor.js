import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"
    />
  </Svg>
);
export default SvgComponent;
