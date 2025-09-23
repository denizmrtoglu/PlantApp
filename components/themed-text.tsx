import { StyleSheet, Text, type TextProps } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    fontFamily: "Rubik_400Regular",
  },
  defaultSemiBold: {
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
  },
  title: {
    fontSize: 24,
    fontFamily: "Rubik_500Medium",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Rubik_500Medium",
  },
  link: {
    fontSize: 16,
    fontFamily: "Rubik_400Regular",
    color: "#0a7ea4",
  },
});
