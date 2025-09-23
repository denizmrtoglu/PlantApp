import { ScrollView, StyleSheet, View } from "react-native";

import { SearchHeader } from "@/components/home/search-header";
import { GetPremiumCard } from "@/components/shared/get-premium-card";
import { useGetCategoriesQuery, useGetQuestionsQuery } from "@/services/home";

export default function HomeScreen() {
  const { data: categories } = useGetCategoriesQuery();
  const { data: questions } = useGetQuestionsQuery();

  //TODO: Remove this
  console.log(categories);
  console.log(questions);

  return (
    <ScrollView style={styles.container}>
      <SearchHeader />
      <View style={styles.body}>
        <GetPremiumCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFAFA",
  },
  body: {
    padding: 24,
    gap: 24,
  },
});
