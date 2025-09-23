import { Tabs } from "expo-router";
import React from "react";

import {
  DiagnoseIcon,
  GardenIcon,
  HomeIcon,
  ProfileIcon,
  ScanIcon,
} from "@/assets/icons";
import { HapticTab } from "@/components/haptic-tab";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        headerShown: false,
        tabBarButton: (props) => (
          <HapticTab {...props} style={styles.tabBarButton} />
        ),
        tabBarLabelStyle: {
          fontFamily: "Rubik_400Regular",
          fontWeight: "400",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="diagnose"
        options={{
          title: "Diagnose",
          tabBarIcon: ({ color }) => <DiagnoseIcon size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarIcon: () => (
            <View style={styles.scanIconContainer}>
              <LinearGradient
                style={styles.scanIcon}
                colors={["#28AF6E", "#2CCC80"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.1667, 1]}
              >
                <ScanIcon size={25} color={"white"} />
              </LinearGradient>
              <View style={styles.innerShadow} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="my-garden"
        options={{
          title: "My Garden",
          tabBarIcon: ({ color }) => <GardenIcon size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <ProfileIcon size={25} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarButton: {
    paddingTop: 6,
    paddingBottom: 1,
    height: 49,
    alignItems: "center",
    justifyContent: "space-between",
  },
  scanIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 22,
    position: "relative",
  },
  scanIcon: {
    width: "100%",
    height: "100%",
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2CCC80",
    borderWidth: 4,
  },
  innerShadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 32,
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.01,
    shadowRadius: 4,
  },
});
