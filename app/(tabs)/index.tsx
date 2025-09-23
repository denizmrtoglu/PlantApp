import { ScrollView, StyleSheet, View } from "react-native";

import { CategoryList } from "@/components/home/category-list";
import { CategoryListSkeleton } from "@/components/home/category-list-skeleton";
import { QuestionList } from "@/components/home/question-list";
import { QuestionListSkeleton } from "@/components/home/question-list-skeleton";
import { SearchHeader } from "@/components/home/search-header";
import { GetPremiumCard } from "@/components/shared/get-premium-card";
import { matchQuery } from "@/lib/match-query";
import { useGetCategoriesQuery, useGetQuestionsQuery } from "@/services/home";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const statusbarHeight = useSafeAreaInsets().top;

  const categoriesQuery = useGetCategoriesQuery();
  const questionsQuery = useGetQuestionsQuery();

  return (
    <View style={{ ...styles.container, marginTop: statusbarHeight }}>
      <SearchHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 24 }}>
          <GetPremiumCard />
        </View>
        {matchQuery(questionsQuery, {
          loading: () => <QuestionListSkeleton />,
          error: () => <></>,
          success: (data) => <QuestionList questions={data} />,
        })}
        {matchQuery(categoriesQuery, {
          loading: () => <CategoryListSkeleton />,
          error: () => <></>,
          success: ({ data }) => <CategoryList categories={data} />,
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFAFA",
  },
  button: {
    height: 32,
    backgroundColor: "#28AF6E",
    alignItems: "center",
  },
  emptyContainer: {
    height: 164,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: 8,
    backgroundColor: "red",
  },
});
