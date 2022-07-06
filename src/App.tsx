import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import KageStack from './modules/navigator/KageStack';
import HomeScreen from './HomeScreen';
import {CommonStyles} from './styles';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="PredefinedHomeStack1">
      <Stack.Screen
        name="PredefinedHomeStack1"
        options={{headerShown: false}}
        component={HomeScreen}
      />
      <Stack.Screen
        name="KageStack"
        options={{headerShown: false}}
        component={KageStack}
      />
    </Stack.Navigator>
  );
};

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={'HOME'}
      screenOptions={{
        tabBarIconStyle: {display: 'none'},
        tabBarActiveTintColor: '#1ABC9C',
        tabBarInactiveTintColor: '#8a8a8a77',
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          position: 'absolute',
          fontSize: 14,
          fontWeight: '900',
        },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          backgroundColor: '#FFFBFE',
        },
      }}>
      <Tab.Screen
        name="ORDERS"
        children={() => (
          <View>
            <Text style={CommonStyles.text}>ORDERS</Text>
          </View>
        )}
      />
      <Tab.Screen name="HOME" component={HomeStack} />
      <Tab.Screen
        name="USER"
        children={() => (
          <View>
            <Text style={CommonStyles.text}>USER</Text>
          </View>
        )}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name={'Main'}
          component={BottomNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'PredefinedRootStack1'}
          children={() => (
            <View>
              <Text style={CommonStyles.text}>PredefinedRootStack1</Text>
            </View>
          )}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'PredefinedRootStack2'}
          children={() => (
            <View>
              <Text style={CommonStyles.text}>PredefinedScreen2</Text>
            </View>
          )}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
