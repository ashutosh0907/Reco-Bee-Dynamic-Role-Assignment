import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './src/redux/reducers/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import {configureStore} from '@reduxjs/toolkit';
import AppNavigator from './src/navigation/Appnavigator';

const store = configureStore({reducer: rootReducer});
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="AppNavigator"
            component={AppNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
