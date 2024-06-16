import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      d="M38.333 51.923V23.09l-7.766 7.767-2.36-2.394L40 16.667l11.797 11.796-2.36 2.397-7.77-7.77v28.833h-3.334Zm-16.28 11.41c-1.535 0-2.816-.513-3.843-1.54-1.027-1.026-1.541-2.309-1.543-3.846V49.87H20v8.077c0 .513.213.984.64 1.413.427.429.897.642 1.41.64h35.9c.511 0 .981-.213 1.41-.64.429-.427.642-.898.64-1.413V49.87h3.333v8.077c0 1.535-.513 2.816-1.54 3.843-1.026 1.027-2.309 1.541-3.846 1.543H22.053Z"
    />
  </Svg>
);
export default SvgComponent;
