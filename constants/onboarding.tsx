import { CarouselItemType } from "@/components/shared/carousel/";
import { BrushText } from "@/components/ui/brush-text";
import { ThemedText } from "@/components/ui/themed-text";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
  },
});

export const ONBOARDING_CAROUSEL_ITEMS: CarouselItemType[] = [
  {
    id: "1",
    title: (
      <ThemedText style={styles.title} darkColor="#13231B">
        Welcome to{" "}
        <ThemedText
          type="defaultSemiBold"
          style={styles.title}
          darkColor="#13231B"
        >
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
      <ThemedText style={styles.title} darkColor="#13231B">
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
      <ThemedText style={styles.title} darkColor="#13231B">
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
