import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgComponent = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={25}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      d="M26.25 3.438h-4.2L19.966.313a.562.562 0 0 0-.467-.25h-9a.562.562 0 0 0-.467.25L7.948 3.437H3.75A2.813 2.813 0 0 0 .937 6.25V22a2.812 2.812 0 0 0 2.813 2.813h22.5A2.812 2.812 0 0 0 29.063 22V6.25a2.812 2.812 0 0 0-2.813-2.813ZM27.938 22a1.687 1.687 0 0 1-1.688 1.688H3.75A1.687 1.687 0 0 1 2.062 22V6.25A1.687 1.687 0 0 1 3.75 4.562h4.5a.563.563 0 0 0 .468-.25L10.8 1.187h8.398l2.084 3.125a.563.563 0 0 0 .468.25h4.5a1.687 1.687 0 0 1 1.688 1.688V22ZM15 7.937a5.625 5.625 0 1 0 0 11.25 5.625 5.625 0 0 0 0-11.25Zm0 10.125a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
    />
  </Svg>
);
export default SvgComponent;
