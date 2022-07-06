import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import createKageStack from './hooks/createKageStack';
import KageScreen from './modules/navigator/KageScreen';
import KageLoader from './modules/navigator/KageLoader';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  const screens = createKageStack();
  return (
    <Stack.Navigator initialRouteName="init">
      <Stack.Screen
        name="init"
        options={{headerShown: false}}
        component={KageLoader}
      />
      {screens.map((screen, i) => (
        <Stack.Screen
          key={i}
          name={`${screen.id}`}
          children={() => <KageScreen />}
        />
      ))}
    </Stack.Navigator>
  );
};

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({route}) => ({
        tabBarIconStyle: {display: 'none'},
        tabBarActiveTintColor: '#efefef',
        tabBarInactiveTintColor: '#8a8a8a77',
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {position: 'absolute', fontSize: 14},
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          backgroundColor: '#a3e3d3',
        },
      })}>
      <Tab.Screen
        name="Eateries"
        children={() => (
          <View>
            <Text>Eateries</Text>
          </View>
        )}
      />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen
        name="DMS"
        children={() => (
          <View>
            <Text>DMS</Text>
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
          name={'PredefinedScreen1'}
          children={() => (
            <View>
              <Text>PredefinedScreen1</Text>
            </View>
          )}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'PredefinedScreen2'}
          children={() => (
            <View>
              <Text>PredefinedScreen2</Text>
            </View>
          )}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
