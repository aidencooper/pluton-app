// https://www.iamsajid.com/ui-colors/

export type ColorPalette = {
  // Background
  bgDark: string;
  bg: string;
  bgLight: string;
  // Text
  text: string;
  textMuted: string;
  // Border
  highlight: string;
  border: string;
  borderMuted: string;
  // Action
  primary: string;
  secondary: string;
  // Alert
  danger: string;
  warning: string;
  success: string;
  info: string;
};

export const DarkPalette: ColorPalette = {
  // Background
  bgDark: "hsl(235 3% 0%)",
  bg: "hsl(235 3% 5%)",
  bgLight: "hsl(235 3% 10%)",
  // Text
  text: "hsl(235 3% 95%)",
  textMuted: "hsl(235 3% 70%)",
  // Border
  highlight: "hsl(235 3% 60%)",
  border: "hsl(235 3% 30%)",
  borderMuted: "hsl(235 3% 30%)",
  // Action
  primary: "hsl(200 100% 60%)",
  secondary: "hsl(28 96% 60%)",
  // Alert
  danger: "hsl(8 84% 66%)",
  warning: "hsl(54 100% 27%)",
  success: "hsl(160 100% 35%)",
  info: "hsl(217 100% 69%)",
};

export const LightPalette: ColorPalette = {
  // Background
  bgDark: "hsl(235 3% 90%)",
  bg: "hsl(235 3% 95%)",
  bgLight: "hsl(235 3% 100%)",
  // Text
  text: "hsl(235 3% 5%)",
  textMuted: "hsl(235 3% 30%)",
  // Border
  highlight: "hsl(235 3% 100%)",
  border: "hsl(235 3% 95%)",
  borderMuted: "hsl(235 3% 43%)",
  // Action
  primary: "hsl(201 100% 18%)",
  secondary: "hsl(27 100% 17%)",
  // Alert
  danger: "hsl(6 65% 41%);",
  warning: "hsl(52 100% 13%)",
  success: "hsl(161 100% 12%)",
  info: "hsl(217 67% 44%)",
};
