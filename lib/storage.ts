import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEYS = {
  HAS_SEEN_ONBOARDING: "@plant_app_has_seen_onboarding",
} as const;

export const setHasSeenOnboarding = async () => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.HAS_SEEN_ONBOARDING, "true");
  } catch (error) {
    console.error("Error saving onboarding status:", error);
  }
};

export const getHasSeenOnboarding = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEYS.HAS_SEEN_ONBOARDING);
    return value === "true";
  } catch (error) {
    console.error("Error getting onboarding status:", error);
    return false;
  }
};
