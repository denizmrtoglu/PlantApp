import type { Question } from "@/types/question";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";

interface QuestionItemProps {
  item: Question;
}

export const QuestionItem = ({ item }: QuestionItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image_uri }}
        style={styles.image}
        contentFit="cover"
      />
      <BlurView style={styles.titleContainer} intensity={50}>
        <ThemedText style={styles.title} numberOfLines={2}>
          {item.title}
        </ThemedText>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 164,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 12,
    paddingHorizontal: 14,
    height: 64,
    borderTopWidth: 1,
    borderColor: "#FFFFFF1A",
    backgroundColor: "#00000033",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "Rubik_500Medium",
    flexShrink: 1,
    flexWrap: "wrap",
  },
});
