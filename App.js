import Main from "./Main";
import FAB from "./components/FAB";
import { useFonts } from "expo-font";
import { TamaguiProvider } from "tamagui";
import { useEffect, useState } from "react";
import { tamaguiConfig } from "./utils/constants";
import { PaperProvider } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

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
