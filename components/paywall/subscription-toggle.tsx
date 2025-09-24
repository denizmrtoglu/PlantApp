import { PaywallSubscriptionList } from "@/constants/paywall";
import { SubscriptionItem } from "@/types/paywall";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function SubscriptionToggle() {
  const [selectedId, setSelectedId] = useState(2);

  const handlePress = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  const renderItem = (item: SubscriptionItem) => {
    const isSelected = selectedId === item.id;

    return (
      <Pressable
        key={item.id}
        onPress={() => handlePress(item.id)}
        style={[
          styles.button,
          isSelected ? styles.buttonSelected : styles.buttonUnselected,
        ]}
      >
        <View style={styles.radioContainer}>
          <View style={[styles.radioOuter]}>
            {isSelected && <View style={styles.radioInner} />}
          </View>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.content}>
            <View style={styles.titleRow}>
              <Text style={[styles.title, { color: "#FFFFFF" }]}>
                {item.title}
              </Text>
            </View>
            <Text style={[styles.subtitle, { color: "#FFFFFFB2" }]}>
              {item.subtitle}
            </Text>
          </View>
        </View>
        {item.badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{item.badge}</Text>
          </View>
        )}
        {isSelected && (
          <LinearGradient
            colors={["#28AF6E3D", "#28af6e00"]}
            style={styles.gradient}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            locations={[1, 0.5]}
          />
        )}
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      {PaywallSubscriptionList.map((item) => renderItem(item))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  content: {
    gap: 4,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 14,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  buttonSelected: {
    backgroundColor: "#1D2521",
    borderColor: "#28AF6E",
    borderWidth: 1.5,
  },
  buttonUnselected: {
    backgroundColor: "#FFFFFF0D",
    borderColor: "#FFFFFF4D",
    borderWidth: 0.5,
  },
  titleContainer: {
    flex: 1,
    marginLeft: 12,
  },
  radioContainer: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  radioOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF26",
  },
  radioInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 8,
    borderColor: "#28AF6E",
    backgroundColor: "white",
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "300",
  },
  badge: {
    backgroundColor: "#28AF6E",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomLeftRadius: 20,
    position: "absolute",
    top: -1,
    right: 0,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
