import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import {
  OnboardingProvider,
  useOnboarding,
} from "@/context/onboarding-context";
import { useColorScheme } from "@/hooks/use-color-scheme";
import ReduxProvider from "@/providers/redux-provider";
import { SplashScreenController } from "@/providers/splash-controller";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ReduxProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <OnboardingProvider>
          <SplashScreenController />
          <RootNavigator />
          <StatusBar style="auto" />
        </OnboardingProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}

function RootNavigator() {
  const { onboarded } = useOnboarding();

  if (onboarded === undefined) return null;

  return (
    <Stack>
      <Stack.Protected guard={!!onboarded}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!onboarded}>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Screen
        name="paywall"
        options={{ presentation: "fullScreenModal", headerShown: false }}
      />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack>
  );
}
