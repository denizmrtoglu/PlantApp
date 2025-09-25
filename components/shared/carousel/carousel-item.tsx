import { CarouselItemType } from "@/components/shared/carousel/";
import { ThemedText } from "@/components/ui/themed-text";
import { ThemedView } from "@/components/ui/themed-view";
import { Image } from "expo-image";
import type { FC } from "react";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

interface CarouselProps {
  item: CarouselItemType;
}

export const CarouselItem: FC<CarouselProps> = ({ item }) => {
  const statusbarHeight = useSafeAreaInsets().top;

  return (
    <ThemedView style={[styles.itemContainer, { width: width }]}>
      <View style={[styles.titleContainer, { marginTop: statusbarHeight }]}>
        {item.title}
        <ThemedText darkColor="#13231B">{item.description}</ThemedText>
      </View>
      <Image
        source={item.image}
        style={{ width: width, height: height, position: "absolute" }}
        contentFit="cover"
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleContainer: {
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: 24,
    paddingRight: 51,
    gap: 8,
    zIndex: 1,
    paddingTop: 12,
  },
});
