import { CarouselItem } from "@/types/onboarding";
import React from "react";
import { StyleSheet, View } from "react-native";

export const CarouselDots = ({
  carouselItems,
  activeIndex,
}: {
  carouselItems: CarouselItem[];
  activeIndex: number;
}) => {
  return (
    <View style={styles.dotContainer}>
      {carouselItems.map((item, index) => (
        <View
          key={item.id}
          style={[
            styles.dot,
            activeIndex - 1 === index ? styles.dotActive : styles.dotInactive,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#13231B",
  },
  dotInactive: {
    backgroundColor: "#13231B40",
  },
});
