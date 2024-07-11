import { useTheme } from "tamagui";
import { AnimatedFAB } from "react-native-paper";

export default function FAB({ theme, setTheme }) {
 const activeTheme = useTheme();

 const handleButtonPress = () => {
  return setTheme(theme === "light" ? "dark" : "light");
 };

 return (
  <AnimatedFAB
  visible={true}
   label={"Label"}
   variant="extended"
   iconMode={"static"}
   animateFrom={"right"}
   style={[
    {
     right: 16,
     bottom: 16,
     position: "absolute",
     backgroundColor: activeTheme.fabBG.val,
    },
   ]}
   icon={activeTheme.darkModeIcon.val}
   onPress={() => handleButtonPress()}
   color={activeTheme.darkModeIconColor.val}
  />
 );
}
