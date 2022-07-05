import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const KageScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Group>
      <Stack.Screen
        name={'init'}
        children={() => (
          <View>
            <Text>KageNavigator</Text>
          </View>
        )}
        options={{headerShown: false}}
      />
    </Stack.Group>
  );
};

export default KageScreen;
