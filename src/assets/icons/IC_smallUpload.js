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
      fillOpacity={0.75}
      d="M10.25 16.366V3.39L6.755 6.886 5.693 5.809 11 .5l5.308 5.309-1.062 1.078-3.496-3.496v12.975h-1.5ZM2.924 21.5c-.691 0-1.267-.231-1.73-.693-.461-.462-.693-1.039-.694-1.731v-3.635H2v3.635c0 .231.096.443.288.636.192.193.404.289.635.288h16.155c.23 0 .441-.096.634-.288.193-.192.289-.404.288-.636v-3.635h1.5v3.635c0 .691-.231 1.267-.693 1.73-.462.461-1.039.693-1.731.694H2.924Z"
    />
  </Svg>
);
export default SvgComponent;
