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
     right: 20,
     bottom: 50,
     position: "absolute",
     backgroundColor: activeTheme.fabBG.val,
    },
   ]}
   icon={activeTheme.fabIcon.val}
   onPress={() => handleButtonPress()}
   color={activeTheme.fabIconColor.val}
  />
 );
}
