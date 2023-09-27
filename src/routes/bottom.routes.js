import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import StackRoutes from "./stack.routes";
import { getTabBarIcon } from "./tabIcons";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => {
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
