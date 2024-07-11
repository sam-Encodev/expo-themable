import { StatusBar } from "expo-status-bar";
import { Text, View, Button, useTheme } from "tamagui";

export default function Main() {
 const activeTheme = useTheme();

 return (
  <View
   flex={1}
   alignItems="center"
   justifyContent="center"
   backgroundColor={activeTheme.bg}
  >
   <StatusBar style="auto" />
   <Text color={activeTheme.color}>
    Open up App.js to start working on your app!
   </Text>
   <Button
    title="Press me"
    color={activeTheme.btnCol}
    backgroundColor={activeTheme.btnBG}
    onPress={() => console.log("Button pressed")}
   >
    Hello
   </Button>
  </View>
 );
}
