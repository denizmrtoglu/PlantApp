import React from "react";
import {
  FlatList,
  FlatListProps,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

interface HorizontalListProps<T>
  extends Omit<
    FlatListProps<T>,
    "horizontal" | "showsHorizontalScrollIndicator"
  > {
  containerStyle?: ViewStyle;
  spacing?: number;
}

/**
 * A reusable horizontal FlatList component that hides the scrollbar
 * and provides spacing control between items.
 *
 * @template T - The type of items in the list
 */
function HorizontalList<T>({
  containerStyle,
  spacing = 0,
  contentContainerStyle,
  renderItem: originalRenderItem,
  ...rest
}: HorizontalListProps<T>) {
  const renderItem: FlatListProps<T>["renderItem"] = (info) => {
    const element = originalRenderItem?.(info);
    if (!element) return null;

    return (
      <React.Fragment>
        {element}
        {info.index < (rest.data?.length ?? 0) - 1 && spacing > 0 && (
          <SpacerView width={spacing} />
        )}
      </React.Fragment>
    );
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.list, containerStyle]}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      renderItem={renderItem}
      {...rest}
    />
  );
}

// Memoize the component for better performance
const MemoizedHorizontalList = React.memo(
  HorizontalList
) as typeof HorizontalList;

const SpacerView = React.memo(({ width }: { width: number }) => {
  SpacerView.displayName = "SpacerView";
  return (
    <React.Fragment>{width > 0 && <View style={{ width }} />}</React.Fragment>
  );
});

const styles = StyleSheet.create({
  list: {
    flexGrow: 0,
  },
  contentContainer: {
    flexGrow: 0,
  },
});

export default MemoizedHorizontalList;
