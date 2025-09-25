import { CloseIcon } from "@/assets/icons";
import { FeatureItem } from "@/components/paywall/feature-item";
import { SubscriptionToggle } from "@/components/paywall/subscription-toggle";
import { Button } from "@/components/ui/button";
import MemoizedHorizontalList from "@/components/ui/horizontal-list";
import { PAYWALL_FEATURES } from "@/constants/paywall";
import { useOnboarding } from "@/context/onboarding-context";
import { setHasSeenOnboarding } from "@/lib/storage";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PaywallScreen() {
  const { setOnboarded } = useOnboarding();

  const handleClose = () => {
    setOnboarded(true);
    router.replace("/(tabs)");
    setHasSeenOnboarding();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/paywall-bg.png")}
        style={styles.backgroundImage}
        contentFit="cover"
      />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          PlantApp <Text style={styles.titlePremium}>Premium</Text>
        </Text>
        <Text style={styles.subtitle}>Access All Features</Text>
      </View>

      <MemoizedHorizontalList
        data={PAYWALL_FEATURES}
        renderItem={({ item }) => <FeatureItem item={item} />}
        spacing={8}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.featureListContainer}
      />
      <View style={styles.body}>
        <SubscriptionToggle />
        <Button label="Tree free for 3 days" onPress={handleClose} />
      </View>

      <Text style={styles.subscriptionInfo}>
        {`After the 3-day free trial period you’ll be charged ₺274.99 per year unless you cancel before the trial expires. Yearly Subscription is Auto-Renewable`}
      </Text>

      <Text style={styles.footer}>Terms • Privacy • Restore</Text>

      <Pressable style={styles.closeButton} hitSlop={12} onPress={handleClose}>
        <CloseIcon />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101E17",
    justifyContent: "flex-end",
  },
  closeButton: {
    position: "absolute",
    top: 55,
    right: 16,
    zIndex: 1,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#00000066",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: 571,
  },
  titleWrapper: {
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: "Rubik_800ExtraBold",
    color: "#FFFFFF",
    alignItems: "center",
  },
  titlePremium: {
    fontSize: 24,
    fontFamily: "Rubik_500Bold",
  },
  subtitle: {
    fontSize: 17,
    fontFamily: "Rubik_300Light",
    color: "#FFFFFF",
  },
  featureListContainer: { paddingHorizontal: 24, marginBottom: 24 },
  body: {
    paddingHorizontal: 24,
    gap: 26,
  },
  subscriptionInfo: {
    textAlign: "center",
    fontSize: 9,
    fontFamily: "Rubik_300Light",
    color: "#FFFFFF84",
    paddingHorizontal: 24,
    marginTop: 8,
  },
  footer: {
    textAlign: "center",
    fontSize: 10,
    fontFamily: "Rubik_400Regular",
    color: "#FFFFFF80",
    paddingHorizontal: 24,
    marginTop: 10,
    marginBottom: 34,
  },
});
