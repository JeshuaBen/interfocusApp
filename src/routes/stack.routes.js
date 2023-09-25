import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./bottom.routes";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Tabs"
    >
      <Screen name="Tabs" component={TabNavigator} />
    </Navigator>
  );
};

export default StackRoutes;
