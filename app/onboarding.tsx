import { Carousel } from "@/components/shared/carousel";
import { ONBOARDING_ITEMS } from "@/constants/onboarding";
import { setHasSeenOnboarding } from "@/lib/storage";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Carousel
        carouselItems={ONBOARDING_ITEMS}
        onFinish={async () => {
          await setHasSeenOnboarding();
          router.push("/paywall");
        }}
        startText="Get Started"
        buttonText="Continue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
