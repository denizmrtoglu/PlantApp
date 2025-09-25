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
import { SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={carouselItems}
        renderItem={({ item }) => (
          <ThemedView style={[styles.itemContainer, { width: width }]}>
            <ThemedView style={styles.titleContainer}>
              {item.title}
              <ThemedText>{item.description}</ThemedText>
            </ThemedView>
            <Image
              source={item.image}
              style={[
                styles.carouselImage,
                { width: width, height: width * (530 / 375) },
              ]}
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

      <View style={styles.buttonContainer}>
        <Button
          label={isFirstItem ? startText : buttonText}
          style={styles.button}
          onPress={isLastItem ? onFinish : handleNext}
        />

        {isFirstItem && (
          <ThemedText
            type="default"
            lightColor="#597165B2"
            darkColor="#597165B2"
            style={styles.termsText}
          >
            By tapping next, you are agreeing to PlantID Terms of Use & Privacy
            Policy.
          </ThemedText>
        )}
      </View>
    </SafeAreaView>
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
  titleContainer: {
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: 24,
    paddingRight: 51,
    gap: 8,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    height: 110,
  },
  button: {
    borderRadius: 12,
  },
  termsText: {
    textAlign: "center",
    fontSize: 11,
    paddingHorizontal: 47,
    marginTop: 17,
  },
  carouselImage: {
    resizeMode: "contain",
  },
});
