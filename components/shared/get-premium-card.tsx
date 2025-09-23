import { ChevronRightIcon, PremiumEnvelopeIcon } from "@/assets/icons";
import GradientText from "@/components/ui/gradient-text";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const badgeCount = 1;

export const GetPremiumCard = () => {
  const handlePress = () => {
    router.push("/paywall");
  };
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <View style={styles.iconContainer}>
        <PremiumEnvelopeIcon />
        {badgeCount > 0 && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{badgeCount}</Text>
          </View>
        )}
      </View>

      <View style={styles.card}>
        <GradientText
          style={styles.title}
          colors={["#E5C990", "#E4B046"]}
          start={{ x: 0.4935, y: 0 }}
          end={{ x: 1.3092, y: 0.91 }}
          height={21}
        >
          FREE Premium Available
        </GradientText>
        <GradientText
          style={styles.subtitle}
          colors={["#F5C25B", "#FFDE9C"]}
          start={{ x: 0.4924, y: 2.69 }}
          end={{ x: 1.1217, y: 0 }}
          height={18}
        >
          Tap to upgrade your account!
        </GradientText>
      </View>

      <ChevronRightIcon />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#24201A",
    borderRadius: 12,
    paddingVertical: 13,
    paddingHorizontal: 20,
    gap: 23,
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconContainer: {
    position: "relative",
  },
  badgeContainer: {
    position: "absolute",
    top: -7,
    right: -7,
    backgroundColor: "#E82C13E5",
    width: 15,
    height: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
  },
  card: { flex: 1 },
  title: { fontSize: 16, fontWeight: "700", letterSpacing: -0.32 },
  subtitle: { fontSize: 13, fontWeight: "400" },
});
