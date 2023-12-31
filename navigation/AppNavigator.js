import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import login from "../screens/login";
import signup from '../screens/signup';
import tentangkami from "../screens/tentangkami";
import FAQ from "../screens/FAQ"
import WelcomeScreen from "../screens/WelcomeScreen";
import RecipeListScreen from "../screens/RecipeListScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";
import info from "../screens/info";
import FavoriteScreen from "../screens/FavoriteScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import BeverageScreen from "../screens/BeverageScreen";
import News from "../screens/News";
import list from "../screens/list";
import SplashScreen from "../screens/splash";








const Stack = createNativeStackNavigator();
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Splash" component={SplashScreen} />
				<Stack.Screen name="Welcome" component={WelcomeScreen} />
				<Stack.Screen name="RecipeList" component={RecipeListScreen} />
				<Stack.Screen name="RecipeDetail" component={RecipeDetailsScreen} />
				<Stack.Screen name="login" component={login} />
				<Stack.Screen name="signup" component={signup} />
				<Stack.Screen name="tentangkami" component={tentangkami} />
				<Stack.Screen name="FAQ" component={FAQ} />
				<Stack.Screen name="info" component={info} />
				<Stack.Screen name="Favorite" component={FavoriteScreen} />
				<Stack.Screen name="profile" component={ProfileScreen} />
				<Stack.Screen name="Search" component={SearchScreen}/>
				<Stack.Screen name="Beverage" component={BeverageScreen}/>
				<Stack.Screen name="News" component={News}/>
				<Stack.Screen name="list" component={list}/>
	
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;


