import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import createKageStack from '../../hooks/createKageStack';
import KageLoader from './KageLoader';
import KageScreen from './KageScreen';

const KageStack = ({navigation}: any) => {
  const Stack = createNativeStackNavigator();
  const screens = createKageStack({navigation});
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
          options={{headerShown: false}}
          name={`${screen.screen_id}`}
          children={() => (
            <KageScreen data={screen.data} id={`${screen.screen_id}`} />
          )}
        />
      ))}
    </Stack.Navigator>
  );
};

export default KageStack;
