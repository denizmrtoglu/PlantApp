import SearchIcon from "@/assets/icons/search";
import { BlurView } from "expo-blur";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput = ({
  placeholder = "Search...",
}: SearchInputProps) => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <SearchIcon size={20} color="#ABABAB" />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#AFAFAF"
        value={searchText}
        onChangeText={setSearchText}
      />
      <BlurView style={styles.blurLayer} intensity={5} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: "#3C3C4340",
    position: "relative",
    overflow: "hidden",
  },
  iconContainer: {
    width: 20,
    height: 20,
    marginLeft: 12,
    zIndex: 1,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
    color: "#000000",
    zIndex: 1,
  },
  blurLayer: {
    backgroundColor: "#FFFFFFE0",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 12,
  },
});
