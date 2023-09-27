import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewClient from "../screens/NewClient";
import Clients from "../screens/Clients";
import NewDebt from "../screens/NewDebt";
import ClientProfile from "../screens/ClientProfile";
import DebtList from "../screens/DebtList";

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
      <Screen name="NewDebt" component={NewDebt} />
      <Screen name="ClientProfile" component={ClientProfile} />
      <Screen name="DebtList" component={DebtList} />
    </Navigator>
  );
};

export default StackRoutes;
