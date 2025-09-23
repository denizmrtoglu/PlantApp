import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";

export default function GradientText({
  children,
  style,
  colors,
  start,
  end,
  height,
}: {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  colors: [string, string];
  start: { x: number; y: number };
  end: { x: number; y: number };
  height: number;
}) {
  return (
    <MaskedView
      style={{ height: height }}
      maskElement={<Text style={style}>{children}</Text>}
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={{ flex: 1 }}
      />
    </MaskedView>
  );
}
