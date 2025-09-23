import * as React from "react";
import Svg, { Defs, LinearGradient, Path, Stop } from "react-native-svg";

function PremiumEnvelopeIcon() {
  return (
    <Svg width={32} height={25} viewBox="0 0 32 25" fill="none">
      <Path
        d="M18.674 16.355a4.806 4.806 0 01-5.348 0L.213 7.613A4.767 4.767 0 010 7.462v14.325a2.945 2.945 0 002.946 2.945h26.108A2.945 2.945 0 0032 21.787V7.462c-.07.052-.14.102-.214.151l-13.112 8.742z"
        fill="url(#paint0_linear_22_4768)"
      />
      <Path
        d="M1.253 6.053l13.113 8.742a2.942 2.942 0 003.268 0l13.113-8.742A2.807 2.807 0 0032 3.71 2.948 2.948 0 0029.055.766H2.945A2.949 2.949 0 000 3.712c0 .943.469 1.818 1.253 2.34z"
        fill="url(#paint1_linear_22_4768)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_22_4768"
          x1={16}
          y1={0.765626}
          x2={28.3343}
          y2={22.1859}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F0D399" />
          <Stop offset={1} stopColor="#D9A846" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_22_4768"
          x1={16}
          y1={0.765626}
          x2={28.3343}
          y2={22.1859}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#F0D399" />
          <Stop offset={1} stopColor="#D9A846" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default PremiumEnvelopeIcon;
