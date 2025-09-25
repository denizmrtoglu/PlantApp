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

const { width, height } = Dimensions.get("window");

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
  const statusbarHeight = useSafeAreaInsets().top;
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
        renderItem={({ item }) => (
          <ThemedView style={[styles.itemContainer, { width: width }]}>
            <View
              style={[styles.titleContainer, { marginTop: statusbarHeight }]}
            >
              {item.title}
              <ThemedText>{item.description}</ThemedText>
            </View>
            <Image
              source={item.image}
              style={{ width: width, height: height, position: "absolute" }}
              contentFit="cover"
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

      <View style={[styles.buttonContainer, { marginBottom: bottombarHeight }]}>
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

const CarouselDots = ({
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
