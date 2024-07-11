import Main from "./Main";
import FAB from "./components/FAB";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { config } from "@tamagui/config/v3";
import { PaperProvider } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { radius, size, space, themes, zIndex } from "@tamagui/themes";
import { createTamagui, TamaguiProvider, createTokens } from "tamagui";

const tokens = createTokens({
 size,
 space,
 themes,
 zIndex,
 radius,
 color: {
  gray: "#ccc",
  white: "#fff",
  black: "#000",
  darkgray: "#8b8589",
 },
});

const tamaguiConfig = createTamagui({
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

export default function App() {
 const [theme, setTheme] = useState("dark");

 const [loaded] = useFonts({
  Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
  InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
 });

 useEffect(() => {
  if (loaded) {
   // can hide splash screen here
  }
 }, [loaded]);

 if (!loaded) {
  return null;
 }

 return (
  <TamaguiProvider config={tamaguiConfig} defaultTheme={theme}>
   <PaperProvider
    settings={{
     icon: (props) => <Ionicons {...props} />,
    }}
   >
    <Main />
    <FAB theme={theme} setTheme={setTheme} />
   </PaperProvider>
  </TamaguiProvider>
 );
}
