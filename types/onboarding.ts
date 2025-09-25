import type { ImageSourcePropType } from "react-native";

export interface CarouselItem {
  id: string;
  title: React.ReactNode;
  description?: string;
  image: ImageSourcePropType;
}
