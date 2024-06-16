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
      d="M30.791 20.803c1.013-.545 1.713-1.634 1.713-2.803-.078-1.168-.778-2.258-1.79-2.803L11.401 4.216c-.467-.311-1.09-.467-1.713-.467-1.48 0-2.804 1.013-3.115 2.336-.078.233-.078.545-.078.857v22.192c0 .311 0 .545.078.857v-.078c.39 1.323 1.635 2.336 3.115 2.336.622 0 1.167-.156 1.634-.467l19.468-10.98Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.496 23.866h8.016l3.057 4.395M6.496 12.134h7.723a6 6 0 0 1 5.78 4.392L22.5 25.22M14.512 21.375a1.012 1.012 0 1 0 0-2.025 1.012 1.012 0 0 0 0 2.025Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.512 16.65a1.012 1.012 0 1 0 0-2.025 1.012 1.012 0 0 0 0 2.025ZM12.149 19.012a1.012 1.012 0 1 0 0-2.024 1.012 1.012 0 0 0 0 2.024ZM16.873 19.012a1.012 1.012 0 1 0 0-2.024 1.012 1.012 0 0 0 0 2.024Z"
    />
  </Svg>
);
export default SvgComponent;
