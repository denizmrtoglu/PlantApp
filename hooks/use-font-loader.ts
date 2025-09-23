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
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export const useFontLoader = () => {
  const [fontsLoaded] = useFonts({
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
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return fontsLoaded;
};
