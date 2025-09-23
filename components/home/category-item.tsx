import { ThemedText } from "@/components/ui/themed-text";
import { Category } from "@/types/category";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

interface CategoryItemProps {
  item: Category;
  isLastItem: boolean;
}

export const CategoryItem = ({ item, isLastItem }: CategoryItemProps) => {
  const { image, title } = item;

  return (
    <View style={[styles.item, isLastItem && { flex: 0.5, marginRight: 48 }]}>
      <Image source={{ uri: image.url }} style={styles.image} />
      <ThemedText type="defaultSemiBold" style={styles.title}>
        {title}
      </ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 6,
    padding: 16,
    backgroundColor: "#F4F6F6",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderWidth: 0.5,
    borderColor: "#29BB892E",
    borderRadius: 12,
    overflow: "hidden",
    height: 158,
  },
  image: {
    width: 162,
    height: 156,
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  title: {
    width: "70%",
    flexWrap: "wrap",
    color: "#13231B",
  },
});
