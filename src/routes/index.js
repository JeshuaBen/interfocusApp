import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./bottom.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Routes;
