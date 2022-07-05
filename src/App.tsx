import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import createKageStack from './hooks/createKageStack';
import KageScreen from './modules/navigator/KageScreen';

const App = () => {
  const Stack = createNativeStackNavigator();
  const screens = createKageStack();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'init'}
          children={() => (
            <View>
              <Text>Main</Text>
            </View>
          )}
          options={{headerShown: false}}
        />
        {screens.map((screen, i) => (
          <Stack.Screen
            key={i}
            name={`${screen.name}`}
            children={() => <KageScreen />}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
