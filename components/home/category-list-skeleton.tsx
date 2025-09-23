import { StyleSheet, View } from "react-native";

export const CategoryListSkeleton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {[1, 2, 3, 4].map((key) => (
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
    padding: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skeletonItem: {
    flex: 1,
    minWidth: "45%",
    height: 158,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#AFAFAF",
    opacity: 0.1,
    marginVertical: 8,
    marginHorizontal: 6,
  },
  titleContainer: {
    position: "absolute",
    top: 16,
    left: 16,
    width: "70%",
    height: 20,
    backgroundColor: "#FFFFFF0D",
    borderRadius: 4,
  },
});
