import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import TabNavigator from "./bottom.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Routes;
