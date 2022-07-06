import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {Colors, CommonStyles} from './styles';

const HomeScreen = ({navigation}: {navigation: NavigationProp<any, any>}) => {
  return (
    <View>
      <Text style={CommonStyles.text}>PredefinedHomeStack1</Text>
      <View style={CommonStyles.container}>
        <Text style={CommonStyles.heading}>Sample Kage App</Text>
        <Text style={CommonStyles.sub_heading}>
          Tap the button to load content
        </Text>
        <Button
          title="Start Kage"
          color={Colors.primary}
          onPress={() => {
            navigation.navigate('KageStack');
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
