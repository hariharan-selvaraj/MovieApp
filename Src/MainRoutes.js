import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieList from './Components/MovieList';
import MovieDetailsPage from './Components/MovieDetailsPage';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="MovieList">
      <Stack.Screen name='MovieList' component={MovieList} /> 
      <Stack.Screen name='MovieDetailsPage' component={MovieDetailsPage} />
    </Stack.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}