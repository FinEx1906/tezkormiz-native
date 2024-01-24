import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splash.screen";
import AuthScreen from "../screens/Auth/auth.screen";
import ForgotPasswordScreen from "../screens/Auth/forgot.password.screen";
import NewPasswordScreen from "../screens/Auth/new.password.screen";
import HomeScreen from "../screens/Home";
import FoodInfoScreen from "../screens/food.info.screen";
import SearchScreen from "../screens/search.system";
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FoodInfo" component={FoodInfoScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
