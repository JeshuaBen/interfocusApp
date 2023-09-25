import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Clients from "../screens/Clients";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useIsFocused } from "@react-navigation/native";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
        },
      }}
      initialRouteName="Home"
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          tabBarIcon: (size, color) => {
            const isFocused = useIsFocused();
            return (
              <SimpleLineIcons
                name="home"
                size={24}
                color={
                  isFocused ? theme.COLORS.GREEN500 : theme.COLORS.GREEN100
                }
              />
            );
          },
        }}
      />
      <Screen
        name="Clients"
        component={Clients}
        options={{
          title: "",
          tabBarIcon: (size, color) => {
            const isFocused = useIsFocused();
            return (
              <Ionicons
                name="person-outline"
                size={24}
                color={
                  isFocused ? theme.COLORS.GREEN500 : theme.COLORS.GREEN100
                }
              />
            );
          },
        }}
      />
    </Navigator>
  );
};

export default TabNavigator;
