import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { useFontLoader } from "@/hooks/use-font-loader";
import ReduxProvider from "@/providers/redux-provider";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const fontsLoaded = useFontLoader();

  if (!fontsLoaded) return null;

  return (
    <ReduxProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="modal"
            options={{
              presentation: "modal",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="paywall"
            options={{ presentation: "fullScreenModal", headerShown: false }}
          />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </ReduxProvider>
  );
}
