import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./bottom.routes";
import NewClient from "../screens/NewClient";
import Clients from "../screens/Clients";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Clients" component={Clients} />
      <Screen name="NewClient" component={NewClient} />
    </Navigator>
  );
};

export default StackRoutes;
