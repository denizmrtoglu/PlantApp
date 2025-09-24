import { Carousel } from "@/components/shared/carousel";
import { ThemedText } from "@/components/ui/themed-text";
import { StyleSheet, View } from "react-native";

export default function PaywallScreen() {
  return (
    <View style={styles.container}>
      <Carousel
        carouselItems={[
          {
            id: "1",
            title: (
              <ThemedText style={{ fontSize: 28 }}>
                Welcome to{" "}
                <ThemedText type="defaultSemiBold" style={{ fontSize: 28 }}>
                  PlantApp
                </ThemedText>
              </ThemedText>
            ),
            description: "Identify more than 3000+ plants and 88% accuracy.",
            image: require("@/assets/images/onboarding-1.png"),
          },
          {
            id: "2",
            title: (
              <ThemedText style={{ fontSize: 28 }}>
                Take a photo to identify the plant!
              </ThemedText>
            ),
            image: require("@/assets/images/onboarding-2.png"),
          },
          {
            id: "3",
            title: (
              <ThemedText style={{ fontSize: 28 }}>
                Get plant care guides
              </ThemedText>
            ),
            image: require("@/assets/images/onboarding-3.png"),
          },
        ]}
        onFinish={() => {}}
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
