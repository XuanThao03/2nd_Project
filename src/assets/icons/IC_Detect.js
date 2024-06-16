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
      fill="#fff"
      d="M4.5 10.5V6.924c0-.691.231-1.268.694-1.73.463-.462 1.04-.693 1.729-.694H10.5V6H6.924c-.231 0-.443.096-.636.288-.193.192-.289.403-.288.635V10.5H4.5Zm6 21H6.924c-.691 0-1.268-.231-1.73-.693-.462-.462-.693-1.038-.694-1.73V25.5H6v3.578c0 .23.096.441.288.634.192.193.403.289.635.288H10.5v1.5Zm15 0V30h3.578c.23 0 .441-.096.634-.288.193-.192.289-.404.288-.636V25.5h1.5v3.578c0 .69-.231 1.265-.693 1.727-.462.462-1.038.694-1.73.695H25.5Zm4.5-21V6.924c0-.231-.096-.443-.288-.636-.192-.193-.404-.289-.634-.288H25.5V4.5h3.578c.69 0 1.265.231 1.727.694.462.463.694 1.04.695 1.729V10.5H30Zm-9.75 3.288c-.71 0-1.31-.245-1.802-.736a2.454 2.454 0 0 1-.736-1.802c0-.709.245-1.31.736-1.802a2.454 2.454 0 0 1 1.802-.736c.709 0 1.31.245 1.802.736.49.492.736 1.092.736 1.802s-.245 1.31-.736 1.802c-.491.49-1.092.736-1.802.736Zm-1.626 12.29h-4.5l1.557-7.997-4.431 1.829v4.84h-1.5v-5.838l5.983-2.493c.645-.26 1.12-.437 1.425-.53.306-.092.587-.139.842-.139.39 0 .753.104 1.087.312.335.208.611.488.829.841l1.5 2.4c.63 1.012 1.501 1.885 2.614 2.618a7.85 7.85 0 0 0 3.72 1.272v1.5c-1.4-.096-2.805-.536-4.213-1.32-1.409-.784-2.629-2.008-3.662-3.67l-1.251 6.375Z"
    />
  </Svg>
);
export default SvgComponent;
