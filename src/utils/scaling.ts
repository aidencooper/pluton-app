import { PixelRatio } from "react-native";

const ROOT_FONT_SIZE = 16;

export function rem(rem: number) {
  return rem * ROOT_FONT_SIZE;
}

// UI scaling
export function dp(px: number) {
  return px / PixelRatio.get();
}

// Font scaling
export function sp(px: number) {
  return px / (PixelRatio.getFontScale() * PixelRatio.get());
}
