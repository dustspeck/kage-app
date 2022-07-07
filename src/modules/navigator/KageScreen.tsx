import React from 'react';
import {View, Text} from 'react-native';
import ImageBanner from '../ui/ImageBanner';
import TextPanel from '../ui/TextPanel';

const KageScreen = () => {
  return (
    <View>
      <Text
        style={{
          position: 'absolute',
          top: 0,
          zIndex: 9,
          backgroundColor: 'blue',
        }}>
        {`KageScreen: ${`1`}`}
      </Text>
      <ImageBanner />
      <TextPanel />
    </View>
  );
};

export default KageScreen;
