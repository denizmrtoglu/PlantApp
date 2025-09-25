import { ThemedText } from "@/components/ui/themed-text";
import { isAndroid } from "@/lib/utils";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

interface BrushTextProps {
  text: string;
  brushWidth?: number;
  brushRight?: number;
  brushBottom?: number;
}

export const BrushText = ({
  text,
  brushWidth = 138,
  brushRight = -12,
  brushBottom = -22,
}: BrushTextProps) => {
  return (
    <View style={styles.container}>
      <ThemedText
        type="defaultSemiBold"
        style={[styles.text, { marginBottom: isAndroid ? -14 : -8 }]}
        darkColor="#13231B"
      >
        {text}
      </ThemedText>
      <Image
        source={require("@/assets/images/brush.png")}
        style={[
          styles.brushImage,
          {
            width: brushWidth,
            right: brushRight,
            bottom: brushBottom,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "flex-end",
  },
  text: {
    fontSize: 28,
    marginBottom: -8,
  },
  brushImage: {
    height: 12,
    position: "absolute",
  },
});
