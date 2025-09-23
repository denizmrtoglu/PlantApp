import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Rubik_400Regular', // 👈 varsayılan Rubik regular
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Rubik_500Medium', // 👈 semi-bold Rubik
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontFamily: 'Rubik_700Bold', // 👈 başlık için bold
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Rubik_500Medium',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    fontFamily: 'Rubik_400Regular',
    color: '#0a7ea4',
  },
});