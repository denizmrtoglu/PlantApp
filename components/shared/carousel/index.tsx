import { Button } from "@/components/ui/button";
import { ThemedText } from "@/components/ui/themed-text";
import { CarouselItem as CarouselItemType } from "@/types/onboarding";
import type { FC } from "react";
import React, { useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CarouselDots } from "./carousel-dots";
import { CarouselItem } from "./carousel-item";

interface CarouselProps {
  carouselItems: CarouselItemType[];
  onFinish: () => void;
  startText: string;
  buttonText: string;
}

export const Carousel: FC<CarouselProps> = ({
  carouselItems,
  onFinish,
  startText,
  buttonText,
}) => {
  const bottombarHeight = useSafeAreaInsets().bottom;

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const isLastItem = activeIndex === carouselItems.length - 1;
  const isFirstItem = activeIndex === 0;

  const handleNext = () => {
    if (flatListRef.current && activeIndex < carouselItems.length - 1) {
      flatListRef.current.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={carouselItems}
        renderItem={({ item }) => <CarouselItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x /
              event.nativeEvent.layoutMeasurement.width
          );
          setActiveIndex(index);
        }}
        scrollEventThrottle={16}
      />

      <View style={[styles.buttonContainer, { marginBottom: bottombarHeight }]}>
        <Button
          label={isFirstItem ? startText : buttonText}
          style={styles.button}
          onPress={isLastItem ? onFinish : handleNext}
        />

        {isFirstItem && (
          <ThemedText type="default" style={styles.termsText}>
            By tapping next, you are agreeing to PlantID Terms of Use & Privacy
            Policy.
          </ThemedText>
        )}

        {!isFirstItem && (
          <CarouselDots
            carouselItems={carouselItems}
            activeIndex={activeIndex}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
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
  buttonContainer: {
    paddingHorizontal: 24,
    height: 110,
    backgroundColor: "transparent",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    borderRadius: 12,
  },
  termsText: {
    textAlign: "center",
    fontSize: 11,
    paddingHorizontal: 47,
    marginTop: 17,
    color: "#597165B2",
  },
});
