import {
  Rubik_400Regular,
  Rubik_500Medium,
  useFonts,
} from "@expo-google-fonts/rubik";
import { Rubik_300Light } from "@expo-google-fonts/rubik/300Light";
import { Rubik_300Light_Italic } from "@expo-google-fonts/rubik/300Light_Italic";
import { Rubik_400Regular_Italic } from "@expo-google-fonts/rubik/400Regular_Italic";
import { Rubik_500Medium_Italic } from "@expo-google-fonts/rubik/500Medium_Italic";
import { Rubik_600SemiBold } from "@expo-google-fonts/rubik/600SemiBold";
import { Rubik_600SemiBold_Italic } from "@expo-google-fonts/rubik/600SemiBold_Italic";
import { Rubik_700Bold } from "@expo-google-fonts/rubik/700Bold";
import { Rubik_700Bold_Italic } from "@expo-google-fonts/rubik/700Bold_Italic";
import { Rubik_800ExtraBold } from "@expo-google-fonts/rubik/800ExtraBold";
import { Rubik_800ExtraBold_Italic } from "@expo-google-fonts/rubik/800ExtraBold_Italic";
import { Rubik_900Black } from "@expo-google-fonts/rubik/900Black";
import { Rubik_900Black_Italic } from "@expo-google-fonts/rubik/900Black_Italic";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";
import { useOnboarding } from "../context/onboarding-context";
import { getHasSeenOnboarding } from "../lib/storage";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync().catch(() => {
  /* reloading the app might trigger some race conditions, ignore them */
});

export function SplashScreenController() {
  const { setOnboarded, onboarded } = useOnboarding();
  const [isAppPrepared, setIsAppPrepared] = useState(false);
  const [hasSplashBeenHidden, setHasSplashBeenHidden] = useState(false);

  const [loaded] = useFonts({
    Rubik_300Light,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
    Rubik_800ExtraBold,
    Rubik_900Black,
    Rubik_300Light_Italic,
    Rubik_400Regular_Italic,
    Rubik_500Medium_Italic,
    Rubik_600SemiBold_Italic,
    Rubik_700Bold_Italic,
    Rubik_800ExtraBold_Italic,
    Rubik_900Black_Italic,
  });

  useEffect(() => {
    async function prepare() {
      try {
        const hasSeenOnboarding = await getHasSeenOnboarding();
        setOnboarded(hasSeenOnboarding);
        setIsAppPrepared(true);
      } catch (error) {
        console.error("Error checking onboarding status:", error);
        setIsAppPrepared(true); // Even on error, we mark as checked to not block the app
      }
    }

    prepare();
  }, [setOnboarded]);

  // Only hide splash screen once when initial loading is complete
  useEffect(() => {
    if (
      loaded &&
      isAppPrepared &&
      onboarded !== undefined &&
      !hasSplashBeenHidden
    ) {
      SplashScreen.hideAsync()
        .then(() => {
          setHasSplashBeenHidden(true);
        })
        .catch((error) => {
          console.error("Error hiding splash screen:", error);
          // Even if there's an error, we mark it as hidden to prevent further attempts
          setHasSplashBeenHidden(true);
        });
    }
  }, [loaded, isAppPrepared, onboarded, hasSplashBeenHidden]);

  return null;
}
