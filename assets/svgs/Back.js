import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Back = props => (
  <Svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path d="M9 2L2 8L9 14" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </Svg>
);

export default Back;
