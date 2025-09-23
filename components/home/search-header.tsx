import { getTimeBasedGreeting } from "@/lib/utils";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../themed-text";
import { SearchInput } from "../ui/search-input";

export const SearchHeader = () => {
  const statusbarHeight = useSafeAreaInsets().top;
  const { text, emoji } = getTimeBasedGreeting();

  return (
    <View style={{ ...styles.container, paddingTop: statusbarHeight }}>
      <>
        <Image
          source={require("@/assets/images/left-leaf.png")}
          style={styles.leftLeaf}
        />
        <Image
          source={require("@/assets/images/right-leaf.png")}
          style={styles.rightLeaf}
        />
      </>
      <View style={styles.titleContainer}>
        <ThemedText style={{ letterSpacing: 0.07 }}>
          Hi, plant lover!
        </ThemedText>
        <ThemedText
          style={{ letterSpacing: 0.35 }}
          type="title"
        >{`${text} ${emoji}`}</ThemedText>
      </View>
      <View style={{ paddingVertical: 14 }}>
        <SearchInput placeholder="Search for plants" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: "#F6F6F6",
  },
  titleContainer: {
    gap: 6,
  },
  searchContainer: { paddingVertical: 14 },
  rightLeaf: {
    height: 86,
    width: 98,
    bottom: 0,
    right: 0,
    position: "absolute",
  },
  leftLeaf: {
    height: 86,
    width: 98,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
