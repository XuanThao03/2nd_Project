import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M33 18c0-8.284-6.715-15-15-15C9.716 3 3 9.716 3 18c0 8.285 6.716 15 15 15 8.285 0 15-6.715 15-15Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.363 25.5V18c0-.706 0-1.06-.219-1.281-.22-.219-.573-.219-1.281-.219m1.125-4.5h.014"
    />
  </Svg>
);
export default SvgComponent;
