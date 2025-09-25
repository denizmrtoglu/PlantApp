import { BrushText } from "@/components/ui/brush-text";
import { ThemedText } from "@/components/ui/themed-text";
import { CarouselItem } from "@/types/onboarding";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
  },
  titleWithSpacing: {
    fontSize: 28,
    letterSpacing: -1,
  },
});

export const ONBOARDING_ITEMS: CarouselItem[] = [
  {
    id: "1",
    title: (
      <ThemedText style={styles.title}>
        Welcome to{" "}
        <ThemedText type="defaultSemiBold" style={styles.title}>
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
      <ThemedText style={styles.title}>
        Take a photo to{" "}
        <BrushText
          text="identify"
          brushWidth={138}
          brushRight={-12}
          brushBottom={-22}
        />{" "}
        the plant!
      </ThemedText>
    ),
    image: require("@/assets/images/onboarding-2.png"),
  },
  {
    id: "3",
    title: (
      <ThemedText style={styles.titleWithSpacing}>
        Get plant{" "}
        <BrushText
          text="care guides"
          brushWidth={152}
          brushRight={6}
          brushBottom={-24}
        />
      </ThemedText>
    ),
    image: require("@/assets/images/onboarding-3.png"),
  },
];
