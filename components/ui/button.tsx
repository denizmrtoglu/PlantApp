import { ThemedText } from "@/components/ui/themed-text";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";

interface ButtonProps extends PressableProps {
  label: string;
  variant?: "primary" | "secondary";
  style?: StyleProp<ViewStyle>;
}

export const Button = ({
  label,
  variant = "primary",
  style,
  ...props
}: ButtonProps) => {
  return (
    <Pressable
      style={[
        styles.button,
        variant === "primary" && styles.primaryButton,
        variant === "secondary" && styles.secondaryButton,
        style,
      ]}
      {...props}
    >
      <ThemedText style={styles.label}>{label}</ThemedText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 32,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  primaryButton: {
    backgroundColor: "#28AF6E",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#28AF6E",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
