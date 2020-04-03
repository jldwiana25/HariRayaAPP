import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR_FONT_PRIMARY_MAIN, COLOR_GREY } from '../../app/styles';

const SvgLessons = props => {
  const color = props.active ? COLOR_FONT_PRIMARY_MAIN : COLOR_GREY;
  return (
    <Svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M19.5556 0H3.66667C2.19267 0 0 0.9588 0 3.6V20.4C0 23.0412 2.19267 24 3.66667 24H21C21.5523 24 22 23.5523 22 23V22.6C22 22.0477 21.5523 21.6 21 21.6H3.68133C3.11667 21.5856 2.44444 21.3672 2.44444 20.4C2.44444 20.2788 2.45544 20.1708 2.47378 20.0724C2.61067 19.3812 3.18756 19.212 3.68133 19.2H21C21.5523 19.2 22 18.7523 22 18.2V2.4C22 1.76348 21.7425 1.15303 21.284 0.702944C20.8256 0.252856 20.2039 0 19.5556 0ZM19.5556 10.8L17.1111 9.6L14.6667 10.8V2.4H19.5556V10.8Z"
        fill={color}
      />
    </Svg>
  );
};

export default SvgLessons;
