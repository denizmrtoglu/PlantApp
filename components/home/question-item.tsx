import { ThemedText } from "@/components/ui/themed-text";
import type { Question } from "@/types/question";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

interface QuestionItemProps {
  item: Question;
}

export const QuestionItem = ({ item }: QuestionItemProps) => {
  const { uri, image_uri, title } = item;

  const handlePress = () => {
    if (!uri) return;
    router.push({
      pathname: "/modal",
      params: { url: uri },
    });
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image
        source={{ uri: image_uri }}
        style={styles.image}
        contentFit="cover"
      />
      <BlurView style={styles.titleContainer} intensity={50}>
        <ThemedText style={styles.title} numberOfLines={2}>
          {title}
        </ThemedText>
      </BlurView>
    </Pressable>
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
