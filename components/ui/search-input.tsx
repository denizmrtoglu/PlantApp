import SearchIcon from "@/assets/icons/search";
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFFE0",
    borderRadius: 12,
    borderWidth: 0.2,
    borderColor: "#3C3C4340",
  },
  iconContainer: {
    width: 20,
    height: 20,
    marginLeft: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
    color: "#000000",
  },
});
