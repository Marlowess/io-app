import React from "react";
import { Svg, Path } from "react-native-svg";
import { SVGIconProps } from "../Icon";

const IconLogout = ({ size, style }: SVGIconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.661 18.7687c-.4242-.3536-.4816-.9841-.128-1.4084l3.6465-4.3758c-.0581.0105-.118.016-.1791.016H9.00041c-.55228 0-1-.4477-1-1s.44772-1 1-1H21.0004c.0612 0 .121.0055.1791.016L17.533 6.64065c-.3536-.42428-.2962-1.05484.128-1.40841.4243-.35356 1.0549-.29624 1.4084.12804l4.4666 5.35982c.618.7417.618 1.819 0 2.5607l-4.4666 5.3598c-.3535.4243-.9841.4816-1.4084.1281Zm-1.6679 5.2318c.5523.004 1.0032-.4404 1.0073-.9927.004-.5523-.4404-1.0032-.9927-1.0073l-11.02925-.0807c-1.64824-.0121-2.97804-1.3517-2.97804-3V5.00049c0-1.65686 1.34315-3 3-3H16.0004c.5523 0 1-.44772 1-1 0-.55229-.4477-1-1-1H5.00041c-2.76142 0-5 2.23857-5 5V18.9198c0 2.7472 2.21633 4.9798 4.9634 4.9999l11.02929.0808Z"
      fill="currentColor"
    />
  </Svg>
);

export default IconLogout;
