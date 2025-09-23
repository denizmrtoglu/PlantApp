import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

function SearchIcon({ size = 25, color = "#ABABAB", ...props }) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <G clipPath="url(#clip0_13696_2111)">
        <Path
          d="M17.258 16.075l-2.833-2.825a6.6 6.6 0 001.408-4.083 6.667 6.667 0 10-6.666 6.666 6.6 6.6 0 004.083-1.408l2.825 2.833a.833.833 0 001.183 0 .833.833 0 000-1.183zM4.167 9.167a5 5 0 1110 0 5 5 0 01-10 0z"
          fill="#ABABAB"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_13696_2111">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SearchIcon;
