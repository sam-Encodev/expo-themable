import { Text, View, useTheme } from "tamagui";

export function Curved({ children }) {
 return <>{children}</>;
}

function CurvedHeader() {
 const activeTheme = useTheme();
 return (
  <View height="10%" padding={15} backgroundColor={activeTheme.bg}>
   <Text color={activeTheme.color}>Header</Text>
  </View>
 );
}

function CurvedView() {
 const activeTheme = useTheme();
 return (
  <View
   height="90%"
   padding={15}
   borderTopLeftRadius={20}
   borderTopRightRadius={20}
   backgroundColor={activeTheme.color}
  >
   <View>
    <Text color={activeTheme.bg}>View</Text>
   </View>
  </View>
 );
}

Curved.Header = CurvedHeader;
Curved.View = CurvedView;
