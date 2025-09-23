import { ThemedView } from "@/components/ui/themed-view";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import WebView from "react-native-webview";

export default function ModalScreen() {
  const { url } = useLocalSearchParams();

  if (!url) {
    return null;
  }

  return (
    <ThemedView style={styles.container}>
      <WebView source={{ uri: url as string }} style={styles.webview} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    width: "100%",
  },
});
