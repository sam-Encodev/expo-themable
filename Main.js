import { StatusBar } from "expo-status-bar";
import { Text, View, Button, useTheme } from "tamagui";

export default function Main() {
 const theme = useTheme();

 return (
  <View
   flex={1}
   justifyContent="center"
   alignItems="center"
   backgroundColor={theme.bg}
  >
   <StatusBar style="auto" />
   <Text color={theme.color}>Open up App.js to start working on your app!</Text>
   <Button
    title="Press me"
    onPress={() => console.log("Button pressed")}
    backgroundColor={theme.btnBG}
    color={theme.btnCol}
   >
    Hello
   </Button>
  </View>
 );
}
