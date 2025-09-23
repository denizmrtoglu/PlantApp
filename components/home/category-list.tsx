import { Category } from "@/types/category";
import { FlatList } from "react-native";
import { CategoryItem } from "./category-item";

interface CategoryListProps {
  categories: Category[];
}

export const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <FlatList
      data={categories}
      renderItem={({ item, index }) => {
        const isLastItem = index === categories.length - 1;
        return <CategoryItem item={item} isLastItem={isLastItem} />;
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
