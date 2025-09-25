import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import {
  OnboardingProvider,
  useOnboarding,
} from "@/context/onboarding-context";
import ReduxProvider from "@/providers/redux-provider";
import { SplashScreenController } from "@/providers/splash-controller";

export default function RootLayout() {
  // If you want to use dark mode, uncomment the following lines
  //const colorScheme = useColorScheme();
  //const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;
  const theme = DefaultTheme;

  return (
    <ReduxProvider>
      <ThemeProvider value={theme}>
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
