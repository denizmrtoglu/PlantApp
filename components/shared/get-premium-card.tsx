import { ChevronRightIcon, PremiumEnvelopeIcon } from "@/assets/icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const badgeCount = 1;

export const GetPremiumCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <PremiumEnvelopeIcon />
        {badgeCount > 0 && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{badgeCount}</Text>
          </View>
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
          FREE Premium Available
        </Text>
        <Text style={{ color: "white", fontSize: 13, fontWeight: "400" }}>
          Tap to upgrade your account!
        </Text>
      </View>
      <ChevronRightIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "black",
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
    backgroundColor: "red",
    width: 15,
    height: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 11,
    fontWeight: "bold",
    color: "white",
  },
});
