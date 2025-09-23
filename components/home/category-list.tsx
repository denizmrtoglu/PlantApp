import { Category } from "@/types/category";
import { Image } from "expo-image";
import { FlatList, StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";

interface CategoryListProps {
  categories: Category[];
}

export const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item, index }) => {
        const isLastItem = index === categories.length - 1;
        return (
          <View
            style={[styles.item, isLastItem && { flex: 0.5, marginRight: 48 }]}
          >
            <Image source={{ uri: item.image.url }} style={styles.image} />
            <ThemedText type="defaultSemiBold" style={styles.title}>
              {item.title}
            </ThemedText>
          </View>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      columnWrapperStyle={{ justifyContent: "flex-start" }}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      numColumns={2}
    />
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
  },
});
