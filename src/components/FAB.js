import { useTheme } from "tamagui";
import { AnimatedFAB } from "react-native-paper";
import { DARK, LIGHT } from "../utils/constants";

export default function FAB({ theme, setTheme }) {
 const activeTheme = useTheme();

 const handleButtonPress = () => {
  return setTheme(theme === LIGHT ? DARK : LIGHT);
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
     backgroundColor: activeTheme.bg.val,
    },
   ]}
   icon={activeTheme.fabIcon.val}
   onPress={() => handleButtonPress()}
   color={activeTheme.color.val}
  />
 );
}
