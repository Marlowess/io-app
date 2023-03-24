import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconAmount = ({ size, style }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2 12C2 6.47715 6.47715 2 12 2c5.5228 0 10 4.47715 10 10 0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10ZM12 0C5.37258 0 0 5.37258 0 12c0 6.6274 5.37258 12 12 12 6.6274 0 12-5.3726 12-12 0-6.62742-5.3726-12-12-12Zm-1.6031 7.26395a4.99997 4.99997 0 0 1 3.0524-.04928 4.99935 4.99935 0 0 1 2.5121 1.73461c.337.43756.9649.51911 1.4025.18214.4376-.33697.5191-.96487.1821-1.40244a7.00002 7.00002 0 0 0-3.5169-2.42845 7.0001 7.0001 0 0 0-7.71012 2.60972A6.9995 6.9995 0 0 0 5.2918 10H5c-.55228 0-1 .4477-1 1s.44772 1 1 1c0 .3361.02419.6702.07179 1H5c-.55228 0-1 .4477-1 1s.44772 1 1 1h.67544a6.99951 6.99951 0 0 0 4.03403 3.6146 6.99956 6.99956 0 0 0 4.27273.0989 7.0002 7.0002 0 0 0 3.5339-2.4039c.34-.4352.2628-1.0636-.1724-1.4036-.4352-.3401-1.0636-.2629-1.4036.1723a5.00032 5.00032 0 0 1-2.5242 1.717 4.99952 4.99952 0 0 1-3.052-.0706A4.99954 4.99954 0 0 1 8 15h4c.5523 0 1-.4477 1-1s-.4477-1-1-1H7.10102A4.99932 4.99932 0 0 1 7 12h5c.5523 0 1-.4477 1-1s-.4477-1-1-1H7.41742a5.00007 5.00007 0 0 1 2.97948-2.73605Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconAmount;
