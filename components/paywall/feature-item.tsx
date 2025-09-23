import { LeavesIcon, ScannerIcon, SpeedometerIcon } from "@/assets/icons";
import { FeatureItem as FeatureItemType } from "@/types/paywall";
import { BlurView } from "expo-blur";
import { StyleSheet, Text, View } from "react-native";

interface FeatureItemProps {
  item: FeatureItemType;
}

export const FeatureItem = ({ item }: FeatureItemProps) => {
  const { title, subtitle, icon } = item;
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name={icon} />
      </View>
      <View style={{ zIndex: 1, gap: 4 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <BlurView style={styles.featureItemBlur} intensity={16} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 156,
    height: 130,
    borderRadius: 14,
    backgroundColor: "#FFFFFF14",
    position: "relative",
    overflow: "hidden",
    padding: 16,
  },
  featureItemBlur: {
    width: 156,
    height: 130,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  icon: { zIndex: 1, marginBottom: 16 },
  title: {
    zIndex: 1,
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    color: "#FFFFFF",
  },
  subtitle: {
    zIndex: 1,
    fontSize: 13,
    fontFamily: "Rubik_300Light",
    color: "#FFFFFF",
  },
});

const Icon = ({ name }: { name: string }) => {
  const ICONS = {
    scanner: ScannerIcon,
    speedometer: SpeedometerIcon,
    leaves: LeavesIcon,
  };

  const IconComponent = ICONS[name as keyof typeof ICONS];
  if (!IconComponent) return null;

  return <IconComponent />;
};
