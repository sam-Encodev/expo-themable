import Main from "./Main";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { config } from "@tamagui/config/v3";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AnimatedFAB, PaperProvider } from "react-native-paper";
import { radius, size, space, themes, zIndex } from "@tamagui/themes";
import { createTamagui, TamaguiProvider, createTokens } from "tamagui";

const tokens = createTokens({
 size,
 space,
 themes,
 zIndex,
 radius,
 color: {
  white: "#fff",
  black: "#000",
  gray: "#ccc",
  darkgray: "#8b8589",
 },
});

const tamaguiConfig = createTamagui({
 ...config,
 tokens,
 themes: {
  light: {
   bg: tokens.color.white,
   color: tokens.color.black,
   btnBG: tokens.color.black,
   btnCol: tokens.color.white,
  },
  dark: {
   bg: tokens.color.black,
   color: tokens.color.white,
   btnBG: tokens.color.white,
   btnCol: tokens.color.black,
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
    <AnimatedFAB
     label={"Label"}
     visible={true}
     variant="extended"
     animateFrom={"right"}
     iconMode={"static"}
     style={[
      {
       right: 16,
       bottom: 16,
       position: "absolute",
       backgroundColor: theme === "dark" ? "white" : "black",
      },
     ]}
     color={theme === "dark" ? "black" : "white"}
     icon={theme === "dark" ? "sunny-outline" : "moon"}
     onPress={() => setTheme(theme === "light" ? "dark" : "light")}
    />
   </PaperProvider>
  </TamaguiProvider>
 );
}
