import 'react-native-gesture-handler';
import React from 'react';
import { KeyboardAvoidingView, Platform, TouchableOpacity, View } from 'react-native';
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
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import MenuButton from './components/MenuButton';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

// const MenuButton = () => {
//   return (
//     <View >
//       <TouchableOpacity
//         style={tw`bg-gray-100 absolute top-9 left-8 z-50 p-3 rounded-full shadow-lg`}
//       >
//         <Icon name="menu" />
//       </TouchableOpacity>
//     </View >
//   );
// };

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >

            <Stack.Navigator>
              <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />
              <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false
              }}
            />
              <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{
                headerShown: false
              }}
              />

            </Stack.Navigator>           
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

function DrawerRoutes() {
  return (

    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Map" component={MapScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>


  );
}


