import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";

export const QuestionListSkeleton = () => {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">Get Started</ThemedText>
      <View style={styles.itemsContainer}>
        {[1, 2].map((key) => (
          <View key={key} style={styles.skeletonItem}>
            <View style={styles.titleContainer} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingHorizontal: 24,
  },
  itemsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  skeletonItem: {
    width: 240,
    height: 164,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#AFAFAF",
    opacity: 0.1,
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    backgroundColor: "#FFFFFF0D",
  },
});
