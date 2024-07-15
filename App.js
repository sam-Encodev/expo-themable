import Main from "./src/Main";
import { useFonts } from "expo-font";
import FAB from "./src/components/FAB";
import { TamaguiProvider } from "tamagui";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import { DARK, LIGHT, tamaguiConfig } from "./src/utils/constants";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
 const colorScheme = useColorScheme();
 const [theme, setTheme] = useState(colorScheme);

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
  <SafeAreaProvider>
   <TamaguiProvider config={tamaguiConfig} defaultTheme={theme}>
    <StatusBar style={theme === LIGHT ? DARK : LIGHT} />
    <PaperProvider
     settings={{
      icon: (props) => <Ionicons {...props} />,
     }}
    >
     <Main />
     <FAB theme={theme} setTheme={setTheme} />
    </PaperProvider>
   </TamaguiProvider>
  </SafeAreaProvider>
 );
}
