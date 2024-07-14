import { View, useTheme } from "tamagui";
import { Curved } from "./components/Curved";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Main() {
 const activeTheme = useTheme();
 const insets = useSafeAreaInsets();

 return (
  <View
   //    height="100%"
   paddingTop={insets.top}
   paddingLeft={insets.left}
   paddingRight={insets.right}
   //    paddingBottom={insets.bottom}
   backgroundColor={activeTheme.bg}
  >
   <Curved>
    <Curved.Header />
    <Curved.View />
   </Curved>
  </View>
 );
}
