import type { Question } from "@/types/question";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../themed-text";
import MemoizedHorizontalList from "../ui/horizontal-list";
import { QuestionItem } from "./question-item";

interface QuestionListProps {
  questions: Question[];
}

export const QuestionList = ({ questions }: QuestionListProps) => {
  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">Get Started</ThemedText>
      <MemoizedHorizontalList<Question>
        data={questions}
        renderItem={({ item }) => <QuestionItem item={item} />}
        spacing={10}
        keyExtractor={(item) => item.id.toString()}
        containerStyle={{ alignSelf: "center" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { gap: 16, paddingHorizontal: 24 },
});
