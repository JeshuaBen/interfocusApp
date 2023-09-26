import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useIsFocused } from "@react-navigation/native";

export const getTabBarIcon = (name) => {
  const theme = useTheme();
  const isFocused = useIsFocused();
  switch (name) {
    case "Home":
      return (
        <SimpleLineIcons
          name="home"
          size={24}
          color={isFocused ? theme.COLORS.GREEN500 : theme.COLORS.GREEN100}
        />
      );
    case "Stacks":
      return (
        <Ionicons
          name="person-outline"
          size={24}
          color={isFocused ? theme.COLORS.GREEN500 : theme.COLORS.GREEN100}
        />
      );
    default:
      return null;
  }
};
