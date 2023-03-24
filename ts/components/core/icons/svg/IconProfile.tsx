import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconProfile = ({ size, style }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 9c0-3.86599 3.13401-7 7-7 3.866 0 7 3.13401 7 7 0 3.866-3.134 7-7 7-3.86599 0-7-3.134-7-7Zm7-9C7.02944 0 3 4.02944 3 9c0 1.7438.49592 3.3717 1.35442 4.7505C1.69462 15.9515 0 19.2778 0 23c0 .5522.44771 1 1 1 .55228 0 1-.4478 1-1 0-3.0854 1.39729-5.8444 3.5936-7.6788C7.22552 16.975 9.49306 18 12 18c2.5069 0 4.7745-1.025 6.4064-2.6788C20.6027 17.1556 22 19.9146 22 23c0 .5522.4477 1 1 1s1-.4478 1-1c0-3.7222-1.6946-7.0485-4.3544-9.2495C20.5041 12.3717 21 10.7438 21 9c0-4.97056-4.0294-9-9-9Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconProfile;
