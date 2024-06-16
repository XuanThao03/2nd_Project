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
      d="M18.587 6.393a1.5 1.5 0 0 0-2.19.053L7.13 16.824a1.5 1.5 0 0 0-.381 1V29.25a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5V24a1.5 1.5 0 0 1 1.5-1.5h4.5a1.5 1.5 0 0 1 1.5 1.5v5.25a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5V17.864a1.5 1.5 0 0 0-.43-1.05L18.587 6.394Z"
    />
  </Svg>
);
export default SvgComponent;
