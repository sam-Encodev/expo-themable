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
   color: tokens.color.black,
   btnBG: tokens.color.black,
   btnCol: tokens.color.white,
   fabBG: tokens.color.black,
   fabIcon: "sunny-outline",
   fabIconColor: tokens.color.white,
  },
  dark: {
   bg: tokens.color.black,
   color: tokens.color.white,
   btnBG: tokens.color.white,
   btnCol: tokens.color.black,
   fabBG: tokens.color.white,
   fabIcon: "moon",
   fabIconColor: tokens.color.black,
  },
 },
});

export const DARK = "dark";
export const LIGHT = "light";