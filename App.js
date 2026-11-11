import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//Bottom Tab Navigator : Home & Profile
function MainTabs({route}) {
  const username  = route?.params?.username;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size, color }) => {
          let iconName = "home";

          if (route.name === "Home") iconName = focused ? "home" : "home-outline";
          if (route.name === "Profile") iconName = focused ? "person" : "person-outline";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} initialParams={{ username }} // hantar ke profile
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerShown: false,
        animation: "slide_from_right", //Default (Andorid/iOS)
       }}>
        {/* 1) Mula dengan Splash */}
        <Stack.Screen name="Splash" component={SplashScreen} />

        {/* 2) Lepas tekan Start -> Login */}
        <Stack.Screen name="Login" component={LoginScreen} />

        {/* 3) Lepas login berjaya -> Main (Tabs) */}
        <Stack.Screen name="Main" component={MainTabs} />
        <Stack.Screen name="Detail" component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});