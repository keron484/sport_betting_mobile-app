import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabnavigation from './src/navigation/Tabnavigation';
import { Provider } from 'react-redux';
import {store, persistor} from './src/Redux/Store/Store';
import Login from './src/screens/Nonlivescreens.jsx/Login';
import Signup from './src/screens/Nonlivescreens.jsx/Signup';
import { PersistGate } from 'redux-persist/integration/react';
const Stack = createNativeStackNavigator();
 const App = () => {
  return (
 
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen 
            name='Tab' 
            component={Tabnavigation}
            options={
              {animation:'slide_from_bottom'}
            }
            ></Stack.Screen>
            <Stack.Screen
              name='Login'
              component={Login}
               options={
              {animation:'slide_from_bottom'}
              }
            >
            </Stack.Screen>
            <Stack.Screen
              name='Signup'
              component={Signup}
               options={
              {animation:'slide_from_right'}
              }
            >
            </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    </PersistGate>
 
  )
}
export default App;
