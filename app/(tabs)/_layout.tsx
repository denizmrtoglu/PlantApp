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
            <View style={styles.scanIcon}>
              <ScanIcon size={25} color={"white"} />
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
  scanIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#2CCC80",
    borderWidth: 4,
    marginBottom: 22,
    backgroundColor: Colors.light.tint,
  },
});
