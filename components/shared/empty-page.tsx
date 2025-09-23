import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/ui/themed-text";
import { Image } from "expo-image";

export const EmptyPage = () => (
  <View style={styles.container}>
    <Image
      source={require("@/assets/images/empty-leaf.png")}
      style={styles.image}
    />
    <View>
      <ThemedText type="title">Coming Soon!</ThemedText>
      <Image
        source={require("@/assets/images/brush.png")}
        style={styles.brush}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
  brush: {
    width: 142,
    height: 30,
  },
});
