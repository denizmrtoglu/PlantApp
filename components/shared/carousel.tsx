import { Button } from "@/components/ui/button";
import { ThemedView } from "@/components/ui/themed-view";
import { Image } from "expo-image";
import type { FC } from "react";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageSourcePropType,
  StyleSheet,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../ui/themed-text";

const { width } = Dimensions.get("window");

interface CarouselItem {
  id: string;
  title: React.ReactNode;
  description?: string;
  image: ImageSourcePropType;
}

interface CarouselProps {
  carouselItems: CarouselItem[];
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
  const statusBarHeight = useSafeAreaInsets().top;

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
      <View style={{ paddingTop: statusBarHeight }}>
        <FlatList
          ref={flatListRef}
          data={carouselItems}
          renderItem={({ item }) => (
            <ThemedView style={[styles.itemContainer, { width: width }]}>
              <ThemedView
                style={{
                  alignItems: "flex-start",
                  width: "100%",
                  paddingLeft: 24,
                  paddingRight: 51,
                  gap: 8,
                }}
              >
                {item.title}
                <ThemedText>{item.description}</ThemedText>
              </ThemedView>
              <Image
                source={item.image}
                style={{ width: width, height: width * (530 / 375) }}
                contentFit="contain"
              />
            </ThemedView>
          )}
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

        <View style={{ paddingHorizontal: 24 }}>
          <Button
            label={isFirstItem ? startText : buttonText}
            style={styles.button}
            onPress={isLastItem ? onFinish : handleNext}
          />
        </View>
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
    justifyContent: "center",
  },
  list: {},
  button: {
    borderRadius: 12,
  },
});
