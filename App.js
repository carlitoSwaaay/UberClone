import 'react-native-gesture-handler';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';
import ProfileScreen from './screens/ProfileScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native-elements';


export default function App() {

  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Drawer.Navigator>
              {/* <Stack.Navigator> */}
              <Drawer.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />
              <Drawer.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false
              }}
            />
              <Drawer.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{
                headerShown: false
              }}
              />

              {/* </Stack.Navigator> */}
            </Drawer.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}


