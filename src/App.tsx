import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import KageStack from './modules/navigator/KageStack';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="PredefinedHomeStack1">
      <Stack.Screen
        name="PredefinedHomeStack1"
        options={{headerShown: false}}
        children={({navigation}) => (
          <View>
            <Text>PredefinedHomeStack1</Text>
            <Button
              title="Start Kage"
              onPress={() => {
                navigation.navigate('KageStack');
              }}
            />
          </View>
        )}
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
      initialRouteName={'Home'}
      screenOptions={{
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
      }}>
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
