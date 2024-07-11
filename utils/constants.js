import { config } from "@tamagui/config/v3";
import { createTamagui, createTokens } from "tamagui";
import { radius, size, space, themes, zIndex } from "@tamagui/themes";

const color = {
 gray: "#ccc",
 white: "#fff",
 black: "#000",
 darkgray: "#8b8589",
};

const tokens = createTokens({
 size,
 space,
 themes,
 zIndex,
 radius,
 color,
});

export const tamaguiConfig = createTamagui({
 ...config,
 tokens,
 themes: {
  light: {
   bg: tokens.color.white,
   fabBG: tokens.color.black,
   color: tokens.color.black,
   btnBG: tokens.color.black,
   btnCol: tokens.color.white,
   darkModeIcon: "sunny-outline",
   darkModeIconColor: tokens.color.white,
  },
  dark: {
   darkModeIcon: "moon",
   bg: tokens.color.black,
   fabBG: tokens.color.white,
   color: tokens.color.white,
   btnBG: tokens.color.white,
   btnCol: tokens.color.black,
   darkModeIconColor: tokens.color.black,
  },
 },
});