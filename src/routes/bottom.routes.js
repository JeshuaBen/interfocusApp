import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { useIsFocused } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import { getTabBarIcon } from "./tabIcons";

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
          tabBarIcon: () => getTabBarIcon("Home"),
        }}
      />
      <Screen
        name="Stacks"
        component={StackRoutes}
        options={{
          title: "",
          tabBarIcon: () => getTabBarIcon("Stacks"),
        }}
      />
    </Navigator>
  );
};

export default TabNavigator;
